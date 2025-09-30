import { UseChatHelpers } from 'ai/react'
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PRESET_QUESTIONS = [
  'Чему учиться в эпоху ИИ?',
  'Чему учить детей?',
  'Какие профессии выживут?',
  'Мне больше 50, что мне делать?',
  'Как создать пассивный доход?',
  'Секреты продуктивности?',
  'Как побороть прокрастинацию?',
  'Инвестиции для новичков?'
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  const handlePresetQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="flex h-full flex-col items-center justify-center px-2 py-4 text-center sm:py-8">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">AI Ментор</h1>
        <p className="max-w-md text-sm text-gray-600">
          Задайте вопрос или выберите один из популярных вопросов ниже
        </p>
      </div>

      {/* Preset Question Buttons */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {PRESET_QUESTIONS.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => handlePresetQuestion(question)}
            className="flex h-auto min-h-[50px] items-center justify-center p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-gray-900 sm:min-h-[60px] sm:p-3 sm:text-sm lg:p-4"
          >
            <MessageSquare className="mr-1 size-3 shrink-0 sm:mr-2 sm:size-4" />
            <span className="text-center leading-tight">{question}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
