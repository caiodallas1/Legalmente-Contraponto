import React, { useState, useEffect, useRef } from 'react';
import { Question, TimerPhase } from '../types';
import { formatTime, calculateProgressPercentage } from '../utils/timer';
import { recordCompletedChallenge } from '../utils/storage';
import {
  Play,
  Pause,
  RotateCcw,
  Square,
  ArrowRight,
  Bookmark,
  Shuffle,
  Eye,
  CheckCircle2,
  X,
  Volume2,
  AlertCircle,
} from 'lucide-react';

interface ConcentrationModeProps {
  question: Question;
  initialPhase: 'research' | 'argumentation';
  onClose: () => void;
  onGenerateNew: () => void;
  onToggleSave: (question: Question) => void;
  isSaved: boolean;
  onOpenOtherSide: (question: Question) => void;
}

const RESEARCH_SECONDS = 600; // 10:00
const ARGUMENT_SECONDS = 120; // 02:00

export const ConcentrationMode: React.FC<ConcentrationModeProps> = ({
  question,
  initialPhase,
  onClose,
  onGenerateNew,
  onToggleSave,
  isSaved,
  onOpenOtherSide,
}) => {
  const [phase, setPhase] = useState<'research' | 'argumentation' | 'finished'>(initialPhase);
  const [totalSeconds, setTotalSeconds] = useState(initialPhase === 'research' ? RESEARCH_SECONDS : ARGUMENT_SECONDS);
  const [remainingSeconds, setRemainingSeconds] = useState(initialPhase === 'research' ? RESEARCH_SECONDS : ARGUMENT_SECONDS);
  const [isRunning, setIsRunning] = useState(false); // Does not start automatically per requirements
  const [hasStartedEver, setHasStartedEver] = useState(false);
  const [researchTimeSpent, setResearchTimeSpent] = useState(0);
  const [argumentTimeSpent, setArgumentTimeSpent] = useState(0);

  // High precision timestamp refs
  const startTimestampRef = useRef<number | null>(null);
  const accumulatedMsRef = useRef<number>(0);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sync phase changes
  const switchPhase = (newPhase: 'research' | 'argumentation' | 'finished') => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setIsRunning(false);
    startTimestampRef.current = null;
    accumulatedMsRef.current = 0;

    if (newPhase === 'research') {
      setPhase('research');
      setTotalSeconds(RESEARCH_SECONDS);
      setRemainingSeconds(RESEARCH_SECONDS);
      setHasStartedEver(false);
    } else if (newPhase === 'argumentation') {
      setPhase('argumentation');
      setTotalSeconds(ARGUMENT_SECONDS);
      setRemainingSeconds(ARGUMENT_SECONDS);
      setHasStartedEver(false);
    } else {
      setPhase('finished');
      // Record challenge statistics
      recordCompletedChallenge(researchTimeSpent, argumentTimeSpent);
    }
  };

  // Start timer
  const handleStart = () => {
    setIsRunning(true);
    setHasStartedEver(true);
    startTimestampRef.current = Date.now();
  };

  // Pause timer
  const handlePause = () => {
    if (isRunning && startTimestampRef.current) {
      accumulatedMsRef.current += Date.now() - startTimestampRef.current;
      startTimestampRef.current = null;
    }
    setIsRunning(false);
  };

  // Reset timer
  const handleReset = () => {
    handlePause();
    accumulatedMsRef.current = 0;
    startTimestampRef.current = null;
    setRemainingSeconds(totalSeconds);
    setHasStartedEver(false);
  };

  // End early
  const handleEndEarly = () => {
    handlePause();
    if (phase === 'research') {
      setResearchTimeSpent(RESEARCH_SECONDS - remainingSeconds);
      switchPhase('argumentation');
    } else if (phase === 'argumentation') {
      setArgumentTimeSpent(ARGUMENT_SECONDS - remainingSeconds);
      switchPhase('finished');
    }
  };

  // Timer Tick effect based on wall clock (avoids drift on background tab)
  useEffect(() => {
    if (!isRunning) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return;
    }

    timerIntervalRef.current = setInterval(() => {
      const now = Date.now();
      const currentElapsedMs = accumulatedMsRef.current + (startTimestampRef.current ? now - startTimestampRef.current : 0);
      const calculatedRemaining = Math.max(0, totalSeconds - Math.floor(currentElapsedMs / 1000));

      setRemainingSeconds(calculatedRemaining);

      if (calculatedRemaining <= 0) {
        clearInterval(timerIntervalRef.current!);
        setIsRunning(false);
        startTimestampRef.current = null;

        if (phase === 'research') {
          setResearchTimeSpent(RESEARCH_SECONDS);
          switchPhase('argumentation');
        } else if (phase === 'argumentation') {
          setArgumentTimeSpent(ARGUMENT_SECONDS);
          switchPhase('finished');
        }
      }
    }, 250);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isRunning, totalSeconds, phase]);

  const progressPercent = calculateProgressPercentage(remainingSeconds, totalSeconds);
  const isUrgent = phase === 'argumentation' && isRunning && remainingSeconds <= 15 && remainingSeconds > 0;

  // SVG circular radius math
  const strokeWidth = 8;
  const radius = 86;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#25232A]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="timer-modal-title"
    >
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#F8DCE8] p-6 sm:p-10 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#25232A]/50 hover:text-[#25232A] hover:bg-[#F8DCE8]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87] cursor-pointer"
          aria-label="Sair do modo de concentração"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Phase Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#742A4A] bg-[#FFF5F9] border border-[#F8DCE8] rounded-full mb-3">
            {phase === 'research' && 'Etapa 1 · Pesquisa e Investigação'}
            {phase === 'argumentation' && 'Etapa 2 · Argumentação Oral'}
            {phase === 'finished' && 'Desafio Concluído'}
          </div>
          <p className="text-xs text-[#25232A]/60">
            {phase === 'research' && '10 minutos para pesquisar doutrina, legislação e precedentes na internet'}
            {phase === 'argumentation' && '2 minutos para organizar e apresentar oralmente suas premissas'}
            {phase === 'finished' && 'O ciclo do contraditório foi completado'}
          </p>
        </div>

        {/* Central Question Display in High Legibility */}
        <div className="bg-[#FFF5F9] border border-[#F8DCE8] rounded-2xl p-5 mb-8 text-center">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#D94F87] mb-2">
            {question.category} · #{question.id}
          </div>
          <h2
            id="timer-modal-title"
            className="font-serif text-xl sm:text-2xl font-bold text-[#25232A] leading-snug"
          >
            “{question.question}”
          </h2>
        </div>

        {/* ===================== RESEARCH OR ARGUMENTATION DISPLAY ===================== */}
        {phase !== 'finished' ? (
          <div>
            {/* Circular Progress & Clock */}
            <div className="flex flex-col items-center justify-center my-6">
              <div className="relative w-52 h-52 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
                  {/* Track ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    className="stroke-[#F8DCE8]"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  />
                  {/* Animated progress ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    className={`transition-all duration-300 ${
                      isUrgent ? 'stroke-[#742A4A] animate-pulse' : 'stroke-[#D94F87]'
                    }`}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>

                {/* Digital Readout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span
                    className={`font-mono text-5xl font-bold tracking-tight transition-colors ${
                      isUrgent ? 'text-[#742A4A] animate-pulse font-extrabold' : 'text-[#25232A]'
                    }`}
                  >
                    {formatTime(remainingSeconds)}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#742A4A]/70 mt-1">
                    {isRunning ? 'Em andamento' : hasStartedEver ? 'Pausado' : 'Aguardando início'}
                  </span>
                </div>
              </div>

              {/* 15 Seconds Discreet Warning */}
              {isUrgent && (
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#742A4A] animate-pulse">
                  <AlertCircle className="w-4 h-4" />
                  <span>Últimos 15 segundos: finalize sua linha de raciocínio!</span>
                </div>
              )}
            </div>

            {/* Timer Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {!isRunning ? (
                <button
                  onClick={handleStart}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D94F87] hover:bg-[#742A4A] text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{hasStartedEver ? 'Continuar' : 'Iniciar cronômetro'}</span>
                </button>
              ) : (
                <button
                  onClick={handlePause}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#742A4A] hover:bg-[#25232A] text-white text-sm font-bold rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Pausar</span>
                </button>
              )}

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#FFF5F9] hover:bg-[#F8DCE8] text-[#25232A] text-sm font-medium rounded-xl border border-[#F8DCE8] transition-colors cursor-pointer"
                aria-label="Reiniciar o cronômetro para o tempo original"
              >
                <RotateCcw className="w-4 h-4 text-[#D94F87]" />
                <span>Reiniciar</span>
              </button>

              <button
                onClick={handleEndEarly}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-[#FFF5F9] hover:bg-[#F8DCE8] text-[#742A4A] text-sm font-medium rounded-xl border border-[#F8DCE8] transition-colors cursor-pointer"
                aria-label={phase === 'research' ? 'Encerrar pesquisa antecipadamente' : 'Encerrar argumentação antecipadamente'}
              >
                <Square className="w-3.5 h-3.5 fill-[#742A4A]" />
                <span>{phase === 'research' ? 'Avançar para argumentação' : 'Encerrar agora'}</span>
              </button>
            </div>

            {/* Practical guidance notes */}
            <div className="mt-8 pt-6 border-t border-[#F8DCE8]/80 text-center">
              <p className="text-xs text-[#25232A]/70 max-w-md mx-auto leading-relaxed">
                {phase === 'research' ? (
                  <>
                    💡 <strong>Como pesquisar:</strong> Abra abas no seu navegador, consulte jurisprudência do STF/STJ, artigos acadêmicos ou legislação. O cronômetro continuará contando com exatidão mesmo com a aba em segundo plano.
                  </>
                ) : (
                  <>
                    🎙️ <strong>Como argumentar:</strong> Defina uma tese clara, cite 2 argumentos de sustentação e antecipe a objeção contrária. Apresente em voz alta, sem necessidade de microfone ou gravação.
                  </>
                )}
              </p>
            </div>
          </div>
        ) : (
          /* ===================== COMPLETED FINISHED STATE ===================== */
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#F8DCE8] flex items-center justify-center text-[#742A4A]">
              <CheckCircle2 className="w-9 h-9 text-[#D94F87]" />
            </div>

            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#25232A] mb-4 leading-snug">
              “Argumentar é mais do que defender uma ideia. É compreender por que outras existem.”
            </p>

            <p className="text-sm text-[#25232A]/70 max-w-md mx-auto mb-8">
              Você dedicou tempo a investigar e exercitar sua oratória com rigor intelectual e profundidade crítica.
            </p>

            {/* Three primary actions specified in prompt */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <button
                onClick={() => {
                  onClose();
                  onGenerateNew();
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D94F87] hover:bg-[#742A4A] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Shuffle className="w-4 h-4" />
                <span>Gerar novo contraponto</span>
              </button>

              <button
                onClick={() => switchPhase('argumentation')}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-[#FFF5F9] text-[#742A4A] text-xs font-bold rounded-xl border border-[#F8DCE8] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-[#D94F87]" />
                <span>Refazer argumentação</span>
              </button>

              <button
                onClick={() => onToggleSave(question)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-[#FFF5F9] text-[#742A4A] text-xs font-bold rounded-xl border border-[#F8DCE8] transition-colors cursor-pointer"
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#D94F87] text-[#D94F87]' : ''}`} />
                <span>{isSaved ? 'Questão salva' : 'Salvar questão'}</span>
              </button>
            </div>

            {/* Explore the other side prompt */}
            <div className="pt-4 border-t border-[#F8DCE8]/70">
              <button
                onClick={() => {
                  onClose();
                  onOpenOtherSide(question);
                }}
                className="text-xs font-semibold text-[#D94F87] hover:text-[#742A4A] inline-flex items-center gap-1.5 transition-colors cursor-pointer underline underline-offset-4"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Deseja conhecer "O outro lado" dessa questão?</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
