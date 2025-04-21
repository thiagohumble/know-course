# KnowCourse - Sua Plataforma de Aprendizado Online


![home](https://github.com/user-attachments/assets/17c1dfb9-530a-4bff-92cb-f391c6f28b28)





**KnowCourse** é uma plataforma de aprendizado online construída com Next.js, Tailwind CSS e TypeScript. O objetivo é fornecer uma experiência de aprendizado intuitiva e moderna, com funcionalidades como listagem de cursos, detalhes, acesso ao player de vídeo e um sistema de autenticação simulado. 

## ✨ Funcionalidades Principais

* **Listagem de Cursos:** Navegue por uma variedade de cursos disponíveis.
  ![navegueCurso](https://github.com/user-attachments/assets/3a8fb003-7464-4ef8-9aa8-0b0c6afefe78)
* **Detalhes do Curso:** Visualize informações detalhadas sobre cada curso, incluindo descrição e preço.
  ![detalheCurso](https://github.com/user-attachments/assets/1ce26c6d-700e-48c8-9a6f-23c9a1525cf5)
* **Player de Vídeo:** Acesse o conteúdo do curso através de um player de vídeo integrado.
  ![playerCurso](https://github.com/user-attachments/assets/018b00c5-053c-47b4-8ae2-1e5278438bf3)
* **Autenticação Simples:** Um sistema de login/logout simulado para gerenciar o acesso aos cursos comprados.
  ![autenticationCourse](https://github.com/user-attachments/assets/1cc7374d-a8a4-4573-a488-65d73c4a6f97)
* **Interface Moderna:** Design elegante e responsivo com Tailwind CSS.
* **Tipagem Segura:** Desenvolvimento com TypeScript para maior segurança e manutenibilidade do código.

## 🌍 Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

* **Node.js:** (Certifique-se de ter uma versão LTS (Long Term Support) instalada. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/))
* **npm (Node Package Manager):** (Geralmente instalado automaticamente com o Node.js. Para verificar sua instalação, abra o terminal e execute `npm -v`)

## ⚙️ Passo a Passo para Configuração Local

Siga estas etapas para rodar o KnowCourse em seu ambiente de desenvolvimento local:

1.  **Clone o Repositório:**
    Abra seu terminal ou prompt de comando e navegue até o diretório onde você deseja clonar o projeto. Execute o seguinte comando:

    ```bash
    git clone https://github.com/thiagohumble/know-course.git
    ```

2.  **Navegue até o Diretório do Projeto:**
    Após clonar o repositório, entre na pasta do projeto:

    ```bash
    cd know-course
    ```

3.  **Instale as Dependências:**
    O projeto utiliza várias bibliotecas e dependências que precisam ser instaladas. Execute o seguinte comando para instalá-las usando o npm:

    ```bash
    npm install
    ```

    Este comando lerá o arquivo `package.json` e baixará todas as dependências necessárias para o projeto.

4.  **Execute o Servidor de Desenvolvimento:**
    Com as dependências instaladas, você pode iniciar o servidor de desenvolvimento do Next.js. Execute o seguinte comando:

    ```bash
    npm run dev
    ```

    Este comando irá compilar o projeto e iniciar um servidor de desenvolvimento local. Geralmente, o site estará acessível em seu navegador no seguinte endereço: `http://localhost:3000`.

5.  **Explore a Plataforma:**
    Abra seu navegador e acesse `http://localhost:3000`. Você deverá ver a página inicial da KnowCourse com a listagem de cursos. Explore as diferentes páginas, como detalhes do curso e a página do player (após simular a compra ou se o curso estiver marcado como comprado no estado inicial).

## 🛠️ Tecnologias Utilizadas

* **Next.js:** Framework React para construção de aplicações web com renderização server-side e muitas outras funcionalidades.
* **React:** Biblioteca JavaScript para construir interfaces de usuário.
* **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
* **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.

## 📂 Estrutura de Pastas Relevante
📁 know-course-app/            # 🏠 Raiz do projeto
├── 🏗️ .next/                 # 🏭 Pasta de build (gerada automaticamente)
├── 🌐 public/                # 🌍 Arquivos estáticos
│   └── 🎨 assets/            # 🖼️ Imagens, ícones, fonts
├── 🚀 app/                   # 🛸 Pasta principal (App Router)
│   ├── 🔐 (auth)/            # 🔑 Rotas de autenticação (agrupamento opcional)
│   │   └── ...               # 🛡️ Componentes de autenticação
│   ├── 🎓 courses/           # 📚 Pasta de cursos
│   │   ├── 🆔 [id]/          # 🏷️ Pasta dinâmica por curso
│   │   │   ├── 🎬 player/    # ▶️ Pasta do player
│   │   │   │   └── 📺 page.tsx  # 🎥 Player do curso
│   │   │   └── 📄 page.tsx   # 📝 Detalhes do curso
│   │   └── 📄 page.tsx       # 📋 Listagem de cursos
│   ├── 🧩 components/        # 🧱 Componentes compartilhados
│   │   ├── 🃏 CourseCard.tsx # 🎴 Card do curso
│   │   ├── 📹 VideoPlayer.tsx # 🎞️ Player de vídeo
│   │   ├── 🔄 Loading.tsx    # ⏳ Componente de loading
│   │   └── 🏷️ Logo.tsx       # 🎨 Logo animado
│   ├── 📊 data/              # 🗃️ Dados da aplicação
│   │   ├── 📚 courses.ts     # 🏫 Lista de cursos
│   │   └️ 👤 user.ts         # 🤵 Dados do usuário
│   └── 🎨 styles/            # 🖌️ Estilos globais
│       └── 🌍 globals.css    # 🎨 CSS global
├── ⚙️ tailwind.config.js     # 🌈 Config do Tailwind
├── 📜 tsconfig.json          # 🛠️ Config do TypeScript
├── 📦 package.json           # 📦 Dependências do projeto
└️ ⚡ next.config.js          # ⚙️ Config do Next.js

