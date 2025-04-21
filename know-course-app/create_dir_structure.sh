#!/bin/bash

# Diretório base
BASE_DIR="./"

# Funcao para criar diretorios e arquivos
create_structure() {
  mkdir -p "$BASE_DIR/app/course/[id]"
  mkdir -p "$BASE_DIR/components"
  mkdir -p "$BASE_DIR/data"
  mkdir -p "$BASE_DIR/styles"
  mkdir -p "$BASE_DIR/public"

  touch "$BASE_DIR/app/page.tsx"
  touch "$BASE_DIR/app/course/[id]/page.tsx"
  touch "$BASE_DIR/app/course/[id]/details.tsx"
  touch "$BASE_DIR/app/course/[id]/player.tsx"
  touch "$BASE_DIR/app/layout.tsx"
  touch "$BASE_DIR/components/CourseCard.tsx"
  touch "$BASE_DIR/components/VideoPlayer.tsx"
  touch "$BASE_DIR/data/courses.ts"
  touch "$BASE_DIR/data/user.ts"
  touch "$BASE_DIR/styles/globals.css"
  touch "$BASE_DIR/tailwind.config.ts"
  touch "$BASE_DIR/tsconfig.json"
}

# Executar a funcao
create_structure

echo "Estrutura de pastas criada com sucesso!"