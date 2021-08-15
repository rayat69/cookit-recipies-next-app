import { useEffect } from 'react'

type Target = Parameters<typeof import('scrollreveal')['reveal']>[0]
type Options = Parameters<typeof import('scrollreveal')>[0]

const useScrollReveal = (target: Target, options?: Options) => {
  useEffect(() => {
    import('scrollreveal').then(({ default: sr }) => {
      sr({
        reset: false,
        ...options,
      }).reveal(target)
    })

    return () => {
      import('scrollreveal').then(({ default: sr }) => {
        ;(sr() as any).destroy()
      })
    }
  }, [target, options])
}

export default useScrollReveal
