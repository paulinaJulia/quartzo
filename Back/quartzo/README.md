# Bem vindo ao Back-end do projeto quartzo!

## Passo a passo para rodar o projeto:
- Clone o repositório:
```bash
https://github.com/paulinaJulia/quartzo.git
```

- Criação de env (caso seja windows tire o 3 de cada comando python):
```bash
  python3 -m venv <nome da env>
```

- Após criar a env, utilize os comandos:
```bash
  #Se for linux
  . <nome da env>/bin/activate
  #caso seja windows
  . <nome da env>/Scripts/activate
  # Ambos os casos:
  cd .\Back\quartzo\  
  pip install -r requirements-dev.txt
```

- Se já possuir um banco criado pelo dev, rodar o comando:
```bash
  python3 manage.py migrate
```
- Se for um banco novo, use o comando:
```bash
  python3 manage.py createsuperuser  
# Com esse comando você estará criando um usuario administrador.
```
- Após isso tudo, para rodar o projeto:
```bash
  python3 manage.py runserver
```
- No seu terminal você verá uma url como essa:
![image](https://github.com/user-attachments/assets/ed629a93-7338-4cb3-8160-fedbd19a9cc2)
*  Copie e cole no seu navegador! Prontinho, só logar no admin e poderá explorar o back-end do projeto em sua maquina. 

