"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  onSelectCategory: (category: string | null) => void
}

export function CategoryFilter({ categories, onSelectCategory }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      onSelectCategory(null)
    } else {
      setSelectedCategory(category)
      onSelectCategory(category)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => {
          setSelectedCategory(null)
          onSelectCategory(null)
        }}
        className="rounded-full"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => handleCategoryClick(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
