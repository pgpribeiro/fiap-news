#!/bin/bash

API_URL="http://localhost:3000/fiap"

# Função para exibir ajuda
usage() {
    echo "Uso: $0 [OPÇÕES]"
    echo "Opções:"
    echo "  -c, --criar-noticia        Adiciona Todas as Noticias"
    echo "  -g, --get         Listar todas as notícias"
    echo "  -d, --delete ID   Deletar uma notícia pelo ID"
    echo "  -u, --update ID   Atualizar uma notícia pelo ID"
    echo "  -h, --help        Mostrar esta mensagem de ajuda"
    exit 1
}

# Função para adicionar uma nova notícia
post_news() {
    curl -X POST http://localhost:3000/fiap \
         -H "Content-Type: application/json" \
         -d '[
          {
              "title": "FIAP anuncia novo curso de IA",
              "description": "Nova especialização em Inteligência Artificial começa no próximo semestre.",
              "imageUrl": "https://thumbs.dreamstime.com/b/not%C3%ADcias-34802664.jpg",
              "fullText": "A FIAP anunciou hoje o lançamento de sua mais nova especialização em Inteligência Artificial. O curso, que começará no próximo semestre, foi desenvolvido em parceria com líderes da indústria para atender à crescente demanda por profissionais especializados em IA. O programa abordará temas como Machine Learning, Deep Learning, Processamento de Linguagem Natural e Ética em IA. As aulas serão ministradas por professores com vasta experiência no mercado e pesquisadores renomados na área. Os alunos terão acesso a laboratórios de última geração e participarão de projetos práticos em parceria com empresas do setor."
          },
          {
              "title": "Hackathon FIAP 2025",
              "description": "Inscrições abertas para o maior evento de tecnologia do ano.",
              "imageUrl": "https://thumbs.dreamstime.com/b/not%C3%ADcias-34802664.jpg",
              "fullText": "O Hackathon FIAP 2025 promete ser o maior evento de tecnologia do ano. Com duração de 48 horas, os participantes terão o desafio de desenvolver soluções inovadoras para problemas reais do mercado. O evento contará com mentores de grandes empresas de tecnologia, workshops exclusivos e prêmios que somam mais de R$ 50.000. As inscrições estão abertas para estudantes de todas as áreas, com foco especial em projetos que integrem IA, IoT e sustentabilidade. Os participantes terão acesso a APIs exclusivas e ferramentas de desenvolvimento de última geração."
          },
          {
              "title": "Parceria com empresas de tecnologia",
              "description": "FIAP firma parceria com grandes empresas do setor tech.",
              "imageUrl": "https://thumbs.dreamstime.com/b/not%C3%ADcias-34802664.jpg",
              "fullText": "A FIAP acaba de anunciar uma série de parcerias estratégicas com algumas das maiores empresas do setor de tecnologia. Estas colaborações permitirão aos alunos acesso a programas de estágio exclusivos, mentoria direta com profissionais da indústria e participação em projetos reais. As empresas parceiras também contribuirão para a atualização dos currículos dos cursos, garantindo que os alunos estejam sempre em sintonia com as últimas tendências do mercado. A iniciativa inclui programas de intercâmbio tecnológico e possibilidades de contratação direta após a graduação."
          },
          {
              "title": "Prêmio de Inovação",
              "description": "Alunos da FIAP vencem competição internacional de inovação.",
              "imageUrl": "https://thumbs.dreamstime.com/b/not%C3%ADcias-34802664.jpg",
              "fullText": "Uma equipe de alunos da FIAP conquistou o primeiro lugar em uma prestigiada competição internacional de inovação. O projeto vencedor apresentou uma solução revolucionária para o monitoramento de recursos hídricos utilizando inteligência artificial e IoT. A tecnologia desenvolvida já atraiu o interesse de empresas e órgãos governamentais. Além do prêmio em dinheiro, a equipe receberá mentoria especializada e suporte para transformar o projeto em um produto comercial. Este é o terceiro ano consecutivo que alunos da FIAP se destacam em competições internacionais de tecnologia."
          }
         ]'
}

# Função para listar todas as notícias
get_news() {
    curl -X GET http://localhost:3000/fiap | jq
}

# Função para deletar uma notícia pelo ID
delete_news() {
    if [ -z "$1" ]; then
        echo "Erro: ID da notícia é obrigatório para deletar."
        exit 1
    fi
    curl -X DELETE "http://localhost:3000/fiap/$1" -H "Content-Type: application/json"
}

# Função para atualizar uma notícia pelo ID
update_news() {
    if [ -z "$1" ]; then
        echo "Erro: ID da notícia é obrigatório para atualizar."
        exit 1
    fi
    curl -X PUT "$API_URL/$1" -H "Content-Type: application/json" -d '{
        "title": "Curso de Desenvolvimento Web Atualizado",
        "description": "A FIAP atualizou seu curso de desenvolvimento web.",
        "imageUrl": "https://example.com/updated.jpg",
        "fullText": "Agora, o curso inclui Vue.js, TypeScript e deploy em nuvem."
    }'
}

# Verifica as flags passadas no terminal
while [[ "$#" -gt 0 ]]; do
    case $1 in
        -c|--criar-noticia) post_news; exit 0 ;;
        -g|--get) get_news; exit 0 ;;
        -d|--delete) delete_news "$2"; exit 0 ;;
        -u|--update) update_news "$2"; exit 0 ;;
        -h|--help) usage ;;
        *) echo "Opção inválida: $1"; usage ;;
    esac
    shift
done

# Se nenhuma opção for passada, exibe a ajuda
usage



