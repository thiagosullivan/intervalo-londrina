import Image from "next/image";
import { BlogPostContainer } from "./style";
import postImg from '../../assets/blog-post-img.png';
import BlogPostInfo from "../BlogPostInfo";


function BlogPost({ category }) {
  return (
    <BlogPostContainer>
      <Image src={postImg} width={815} height={300} />
      <BlogPostInfo category="Cinema" />
      <h1>Duas visões sobre a figura feminina no espaço do ateliê em 1884</h1>
      <p>A música Construção, de Chico Buarque, é um grande manifesto poético e político da música popular brasileira. O jogo de palavras e a temática proposta pela canção tornam-a um marco do cenário musical brasileiro da década de 1970. Chico Buarque, com então 27 anos de idade, atingiu a muitos públicos com a música, agradando a diferentes gostos durante um período de intensa censura e tensão política na ditadura militar. Com Chico Buarque, Construção atingiu o topo das paradas nas rádios de todo o país e atravessou gerações, sendo uma música de grande relevância e prestigiada até os dias de hoje!</p>
      <br/>
      <p>Apesar da letra crítica de Construção, Chico Buarque conseguiu aprovar o uso da mesma sem problemas com o departamento de censura do governo da ditadura militar. O significado da música Construção reflete um país cuja desigualdade social, a alienação política da classe trabalhadora e o descaso com a morte do próximo são temas presentes em meio à interpretação da música no contexto da época.</p>
      <br/>
      <p>A música Construção, de Chico Buarque, é um grande manifesto poético e político da música popular brasileira. O jogo de palavras e a temática proposta pela canção tornam-a um marco do cenário musical brasileiro da década de 1970. Chico Buarque, com então 27 anos de idade, atingiu a muitos públicos com a música, agradando a diferentes gostos durante um período de intensa censura e tensão política na ditadura militar. Com Chico Buarque, Construção atingiu o topo das paradas nas rádios de todo o país e atravessou gerações, sendo uma música de grande relevância e prestigiada até os dias de hoje!</p>
      <br/>
      <p>Apesar da letra crítica de Construção, Chico Buarque conseguiu aprovar o uso da mesma sem problemas com o departamento de censura do governo da ditadura militar. O significado da música Construção reflete um país cuja desigualdade social, a alienação política da classe trabalhadora e o descaso com a morte do próximo são temas presentes em meio à interpretação da música no contexto da época.</p>
    </BlogPostContainer>
  )
}

export default BlogPost;