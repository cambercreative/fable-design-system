"use client"

import React from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import { useTheme } from 'next-themes'

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const { theme: appTheme } = useTheme()
  const isDark = appTheme === 'dark'
  
  return (
    <div className="rounded-md overflow-hidden">
      <Highlight
        theme={isDark ? themes.nightOwl : themes.nightOwlLight}
        code={code.trim()}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} p-4 overflow-auto`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className="inline-block w-8 text-right mr-4 text-gray-500 select-none">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
