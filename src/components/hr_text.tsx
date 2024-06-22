import React from "react";

export default function HrText({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
      <div className="px-4 text-gray-500 dark:text-gray-400">{text}</div>
      <div className="flex-1 border-t border-gray-300 dark:border-gray-600" />
    </div>
  )
}
