#!/bin/bash

command -v npm >/dev/null 2>&1 || { echo >&2 "npm não está instalado. Por favor, instale o npm."; exit 1; }

npm install react-router-dom react-icons styled-components @types/styled-components @mui/material @emotion/react @emotion/styled

echo "Iniciando o servidor de desenvolvimento..."
npm start

echo "Servidor iniciado com sucesso!"