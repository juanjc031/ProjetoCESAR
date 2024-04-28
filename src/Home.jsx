import React from "react";
import imagem1 from "../public/figura1.jpg";
import Navbar from "./components/Navbar";
import imagem2 from "../public/figura2.jpg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import CardComp from "./components/CardComp";
import isis from "../public/Isis Eloah Machado.jpeg";
import adriana from "../public/Adriana Lúcia Meiresles.jpg";
import deborah from "../public/Deborah Carvalho Malta.jpg";
import eliseu from "../public/Eliseu Verly Junior.png";
import jorge from "../public/jorge Gustavo Velasquez.png";
import leticia from "../public/Letícia Cardoso.png";
import luisa from "../public/Luisa-Flor-2.png";
import marianaF from "../public/Mariana Felisbino.png";
import mariana from "../public/Foto Mariana Menezes1.jpeg";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
register();

const data = [
  {
    id: "1",
    src: "MjK1Egur6Eg",
    titulo:
      "Carga de doenças atribuíveis a fatores de risco alimentar e seu custo financeiro para o Sistema Único de Saúde no Brasil",
  },
  {
    id: "2",
    src: "kXjqcO1JtWk",
    titulo: "Estimativa da carga de doenças atribuíveis aos fatores de riscos",
  },
  {
    id: "3",
    src: "RZjDCHBccQo",
    titulo: "Estimativa dos gastos em saúde atribuíveis aos fatores de risco",
  },
  {
    id: "4",
    src: "VhTpZ9oZj3I",
    titulo:
      "Carga de doença atribuível ao consumo excessivo de sódio no Brasil",
  },
  {
    id: "5",
    src: "CHfGKMYjhc4",
    titulo:
      "Mortalidade atribuída ao consumo insuficiente de grãos integrais frutas e hortaliças",
  },
  {
    id: "6",
    src: "cIetCMw5XZw",
    titulo:
      "Anos de vida vividos com incapacidade por doenças crônicas não transmissíveis atribuídas ao consumo insuficiente de frutas e hortaliças e seus custos financeiros diretos para o Sistema Único de Saúde no Brasil",
  },
  {
    id: "7",
    src: "PyqO2cm-DCU",
    titulo:
      "Carga de doenças e custos com hospitalizações devidos ao uso de álcool",
  },
];


import EmpComp from "./components/EmpComp";
import logoUfop from "../public/logo-ufop.png";
import logoGbd from "../public/GBDBrasil_logo_v1.png";
import logoCnpq from "../public/CNPq_v2017_rgb.jpg";
import logoDecit from "../public/Ministério da Saúde.png";
import logoFapemig from "../public/FAPEMIG_nova_logo_eps.jpg";

import Footer from "./components/Footer";
import AppRoutes from "./Routes";


const handleScroll = () => {
  let sobreSection = document.getElementById("faixa2");
  sobreSection.scrollIntoView({ behavior: "smooth" });
};

const handleScrollSobre = () => {
  let sobreSection2 = document.getElementById("sobre");
  sobreSection2.scrollIntoView({ behavior: "smooth" });
};

/* PARTE SOBRE */

import imagem3 from "../public/figura3.jpg";
import figura4 from "../public/figura4.jpg";
import figura5 from "../public/figura5.jpg";
import icone1 from "../public/icone1-removebg-preview.png";
import icone2 from "../public/icone2-removebg-preview.png";
import icone3 from "../public/icone3-removebg-preview.png";
import icone4 from "../public/icone4-removebg-preview.png";
import icone5 from "../public/icone5-removebg-preview.png";
import icone6 from "../public/icone6-removebg-preview.png";
import icone7 from "../public/icone7-removebg-preview.png";
import CardImgComp from "./components/CardImgComp";

const data2 = [
  {
    id: "1",
    titulo:
      "Carga de doenças atribuíveis a fatores de risco alimentar e seu custo financeiro para o Sistema Único de Saúde no Brasil",
    src: "MjK1Egur6Eg",
  },
  {
    id: "2",
    titulo: "Estimativa da carga de doenças atribuíveis aos fatores de riscos",
    src: "kXjqcO1JtWk",
  },
  {
    id: "3",
    titulo: "Estimativa dos gastos em saúde atribuíveis aos fatores de risco",
    src: "RZjDCHBccQo",
  },
  {
    id: "4",
    titulo:
      "Carga de doença atribuível ao consumo excessivo de sódio no Brasil",
    src: "VhTpZ9oZj3I",
  },
  {
    id: "5",
    titulo:
      "Mortalidade atribuída ao consumo insuficiente de grãos integrais frutas e hortaliças",
    src: "CHfGKMYjhc4",
  },
  {
    id: "6",
    titulo:
      "Anos de vida vividos com incapacidade por doenças crônicas não transmissíveis atribuídas ao consumo insuficiente de frutas e hortaliças e seus custos financeiros diretos para o Sistema Único de Saúde no Brasil",
    src: "cIetCMw5XZw",
  },
  {
    id: "7",
    titulo:
      "Carga de doenças e custos com hospitalizações devidos ao uso de álcool",
    src: "PyqO2cm-DCU",
  },
];

/* PARTE ARTIGOS */

import ArticleComp from "./components/ArticleComp";
import figura6 from "../public/figura6.jpg";
import artigo1 from "../public/artigo1.png";
import artigo2 from "../public/artigo2.png";
import artigo3 from "../public/artigo3.png";
import artigo4 from "../public/artigo4.png";
import artigo5 from "../public/artigo5.png";
import artigo6 from "../public/artigo6.png";
import artigo7 from "../public/artigo7.png";
import artigo8 from "../public/artigo8.png";
import artigo9 from "../public/artigo9.jpg";

/* PARTE EQUIPE */

import figura7 from "../public/figura7.jpg";

import TeamCard from "./components/TeamCard";
import renato from "../public/Renato Azeredo Teixeira.jpg";
import aline from "../public/Aline Fogal Vegi.png";

import magda from "../public/Magda do Carmo Parajára (1).jpeg";
import larissa from "../public/Larissa F Fonseca Guedes 1.png";
import joice from "../public/Foto 02 Joice.jpeg";
import luane from "../public/Luane Pinheiro Rocha 2.jpeg";
import carla from "../public/Carla Faustino Rocha.png";


function Main() {
  return (
    <>
      <Navbar></Navbar>
      <div
        id="main"
        className=" relative bg-white h-screen flex justify-end pt-16 items-start cursor-default"
      >
        <div className="absolute  left-28 mmd:left-10 mt-20 z-50 bg-white flex flex-col p-4 items-start justify-center mmd:!w-[80%] mlg:w-[60%] w-[40%] rounded-lg">
          <p className="uppercase text-sm font-serif font-semibold text-blue">
            Seja bem vindo!
          </p>
          <p className="py-4 text-blue w-[80%] text-6xl font-serif">
            Conheça o Estudo <span>CESAR</span>
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
          <p className="py-4 text-blue w-[60%] text-xl font-serif">
            Carga Econômica e de Saúde Atribuível a fatores de Risco
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleScroll}
              type="button"
              className="text-white font- mt-5 bg-[#00c9b0] rounded text-sm px-4 py-2 text-center mb-2 uppercase tracking-wide font-medium"
            >
              Ler mais
            </button>
            <a href="https://drive.google.com/file/d/1hMrAfa3_8-weVN2mR7eHJeLyWueq_5p9/view?usp=sharing" target="_blank">
              <button
                type="button"
                className="font-medium mt-5 border-2 border-[#00c9b0] text-[#171653] rounded text-sm px-4 py-2 text-center mb-2 uppercase"
              >
                Relatório de pesquisa
              </button>
            </a>
          </div>
        </div>
        <div className="w-[60%] mlg:w-[70%] mmd:!w-full right-0 absolute flex justify-start items-center">
          <img
            src={imagem1}
            className="flex justify-center items-center  rounded-lg"
            width={5000}
            height={3000}
            alt="imagem1"
          />
        </div>
      </div>

      <div id="faixa2" className="w-full h-screen  flex relative ">
        <div className="w-[50%] mmd:w-[80%] top-36 p-8 mmd:p-4 left-10 absolute z-50 px-28 flex flex-col justify-center items-start bg-white rounded-lg">
          <p className="text-blue text-start text-lg mmd:w-full">
            Compreender o impacto da alimentação não saudável e outros fatores
            de risco na saúde é uma forma de identificar as melhores estratégias
            para aumentar a expectativa de vida da população e tornar mais
            eficientes os investimentos no nosso sistema saúde.
          </p>
          <a onClick={handleScrollSobre}>
            <button
              type="button"
              className="flex font-semibold justify-center gap-2 items-center text-blue-700 mt-5 border border-blue-700 rounded text-sm px-4 py-2 text-center mb-2 uppercase tracking-wide"
            >
              Saiba mais
              <FaUpRightFromSquare />
            </button>
          </a>
        </div>
        <div className="w-[50%] mmd:w-full absolute flex justify-center items-center right-0 top-5">
          <img
            src={imagem2}
            alt="imagem2"
            className="flex justify-center items-center rounded-lg"
          />
        </div>
      </div>

      {/* <div className="w-full  h-full mmd:items-center mmd:my-0 my-16 flex flex-col flex-wrap items-center justify-center gap-6 bg-white">
        <h1 className="flex w-full justify-start mmd:pl-4 pl-24 -mb-4 text-3xl">
          Galeria do Time
        </h1>
        <div className="flex gap-2 flex-wrap mmd:justify-center">
          <CardComp
            img={isis}
            name={"Ísis Eloah Machado"}
            alt={"Isis"}
            descc={"Coordenadora"}
            lattes={"http://lattes.cnpq.br/0150005556742996"}
          />
          <CardComp
            img={mariana}
            name={"Mariana Carvalho de Menezes"}
            alt={"Mariana"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/8894598416587453"}
          />
          <CardComp
            img={adriana}
            name={"Adriana Lúcia Meireles"}
            alt={"Adriana"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/5415462090135377"}
          />
          <CardComp
            img={marianaF}
            name={"Mariana Santos Felisbino Mendes"}
            alt={"Mariana"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/5074825535350952"}
          />
          <CardComp
            img={deborah}
            name={"Deborah Carvalho Malta"}
            alt={"Deborah"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/3261263738543724"}
          />
        </div>
        <div className="flex gap-2 flex-wrap mmd:justify-center">
          <CardComp
            img={jorge}
            name={"Jorge Gustavo Velásques Meléndez"}
            alt={"Jorge"}
            descc={"Pesquisador"}
            lattes={"http://lattes.cnpq.br/8406550065682773"}
          />
          <CardComp
            img={eliseu}
            name={"Eliseu Verly Junior"}
            alt={"Eliseu"}
            descc={"Pesquisador"}
            lattes={"http://lattes.cnpq.br/9014880928943124"}
          />
          <CardComp
            img={leticia}
            name={"Letícia de Oliveira Cardoso"}
            alt={"Letícia"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/7425850404169766"}
          />
          <CardComp
            img={luisa}
            name={"Luísa Sorio Flor"}
            alt={"Luísa"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/8883026435305801"}
          />
        </div>
      </div> */}

      <div className="w-full md:max-w-[1440px] m-auto py-10 mmd:px-2 px-14">
        <h1 className="text-3xl pb-4  w-full">Galeria de vídeos</h1>

        <Swiper
          slidesPerView={1}
          className="w-full h-[30rem] rounded-l-xl rounded-r-xl "
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
              <SwiperSlide
                className="flex flex-col gap-4 border border-gray-400"
                key={item.id}
              >
                {/* <div className=" items-center text-base absolute z-50 bg-black bg-opacity-50 flex w-full justify-center  px-3">
                  <h1 className="text-white text-center">{item.titulo}</h1>
                </div> */}
                <iframe
                  className=" w-full h-full"
                  src={`https://www.youtube.com/embed/${item.src}?rel=0`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full justify-center pb-10 flex flex-col ">
      <h1 className="text-3xl w-full flex mmd:ml-2 md:justify-center">
        Nossos Parceiros
      </h1>
      <div className="flex w-full justify-center items-center h-72 mmd:h-full mmd:gap-10 mmd:flex-wrap mmd:mt-5">
        <EmpComp
          img={logoUfop}
          text={"UFOP - Universidade Federal de Ouro Preto"}
          link={"https://ufop.br/"}
        />
        <EmpComp
          img={logoCnpq}
          text={
            "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"
          }
          link={"https://www.gov.br/cnpq/pt-br"}
        />
        <EmpComp
          img={logoGbd}
          text={"Rede GBD Brasil"}
          link={"https://gbdbr.com.br/"}
        />
      </div>
      <div className="flex w-full justify-center items-start h-72 mmd:gap-10 mmd:h-full mmd:flex-wrap mmd:mt-5">
        <EmpComp
          img={logoFapemig}
          text={
            "FAPEMIG - Fundação de Amparo à Pesquisa do Estado de Minas Gerais"
          }
          link={"http://www.fapemig.br/pt/"}
        />
        <EmpComp
          img={logoDecit}
          text={
            "DECIT - Departamento de Ciência e Tecnologia/Ministério da Saúde"
          }
          link={"https://www.gov.br/saude/pt-br/composicao/sectics/decit"}
        />
      </div>
    </div>

    {/* PARTE SOBRE */}

    <div id="sobre" className="relative flex justify-center items-center h-full w-full mmd:pt-32 pt-60 mmd:mb-36 mb-64">
        <div className="absolute flex flex-col  items-start justify-center mr-6 mmd:w-[80%] mmd:left-16 mmd:p-3 mmd:mt-32 left-44 w-1/3 rounded-lg z-50 bg-white">
          <p className="md:pt-4 mb-2 text-blue text-6xl font-serif ">Sobre</p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="absolute flex justify-center items-center w-[60%] mmd:w-full right-0">
          <img
            src={imagem3}
            className="flex justify-center items-center bg-cover rounded-lg"
            alt="imagem3"
          />
        </div>
      </div>
      <div className="p-4 h-full flex mmd:flex-col justify-center mx-10 mmd:mx-2 shadow-xl cursor-default bg-[#f7f7f7] shadow-gray-800 mb-10 rounded-md">
        <div className="flex flex-col mmd:mb-6">
          <p className="text-[#00c9b0] font-medium">01.</p>
          <p className="text-xl font-semibold mt-2">
            Estudo <br />
            CESAR
          </p>
        </div>
        <div className="px-10 mmd:px-2 w-full">
          <hr className="border-2 border-[#00c9b0] w-20 mb-4"></hr>
          <div className="text-sm flex mmd:flex-col gap-5">
            <div className="text-lg font-medium">
              O Estudo CESAR investiga o impacto dos comportamentos alimentares
              e outros fatores de risco na saúde da população brasileira e por
              meio da estimativa dos óbitos, incapacidades e gastos em saúde que
              poderiam ser evitados caso esses fatores fossem reduzidos ou
              eliminados. Para calcular esses valores são utilizadas diversas
              fontes de dados como inquéritos em saúde, dados administrativos do
              setor saúde, o sistema de informação sobre mortalidade, artigos
              científicos e relatórios publicados. Por meio da parceria com a{" "}
              <a
                target="_blank"
                className="text-blue-600 visited:text-purple-600 underline cursor-pointer"
                rel="noopener noreferrer"
                href="https://gbdbr.com.br/"
              >
                Rede GBD Brasil
              </a>
              ,
            </div>
            <div className="text-lg font-medium">
              o Estudo CESAR utiliza estimativas obtidas pelo estudo Carga
              Global de Doença (Global Burden of Disease – GBD), que é
              coordenado pelo 
              <a
                href="https://www.healthdata.org/"
                target="_blank"
                className="text-blue-600 visited:text-purple-600 underline cursor-pointer"
                rel="noopener noreferrer"
              >
                Institute for Health Metrics and Evaluation (IHME)
              </a>
              da Universidade de Washington. Os dados utilizados pelo IHME são
              coletados e analisados por uma rede de mais de 7000 pesquisadores
              espalhados por mais de 156 países e territórios. Transformados em
              métricas, exprimem incidência, prevalência, mortalidade prematura,
              incapacidade, bem como anos de vida saudável perdidos em
              decorrência de mais de 350 doenças e lesões, mais de 80 fatores de
              risco, em 204 países e territórios.
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 h-full flex justify-center mmd:flex-col mmd:mx-2 mx-10 shadow-xl cursor-default bg-[#f7f7f7] shadow-gray-800 mb-10 rounded-md">
        <div className="flex flex-col mmd:mb-6">
          <p className="text-[#00c9b0] font-medium">02.</p>
          <p className="text-xl font-semibold mt-2">
            Fração atribuível
            <br />
            populacional (FAP)
          </p>
        </div>
        <div className="px-10 mmd:px-2 w-full">
          <hr className="border-2 border-[#00c9b0] w-20 mb-4"></hr>
          <div className="text-sm flex mmd:flex-col gap-5">
            <div className="text-lg font-medium">
              O cálculo do impacto dos fatores de risco na saúde da população é
              realizado por meio da obtenção da Fração Atribuível Populacional
              (FAP), uma medida que leva em consideração a distribuição do fator
              de risco na população, o valor de exposição em que o risco seria
              minimizado e os riscos relativos dos pares risco-desfecho obtidos
              por revisões da literatura. Após obter a FAP de um par
              risco-desfecho específico, a multiplicamos pela carga de doença
              daquele desfecho.
            </div>
            <div className="text-lg font-medium">
              Sendo que a carga de doença é mensurada por meio no número de
              óbitos, anos perdidos por mortalidade prematura, anos vividos com
              incapacidades, e os valores gastos pelo serviço de saúde. Por fim,
              possível obter a estimativa de óbitos, incapacidades e valores
              monetários gastos que poderiam ser evitados caso os fatores de
              risco estudados tivessem sido reduzidos ou eliminados no passado.
              Essas medidas são úteis no planejamento e gestão em saúde, para
              que possamos investir em políticas e ações mais custo-efetivas.
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex  flex-col gap-10 justify-center items-center py-10 mmd:px-2 px-10">
        <h1 className="font-semibold text-2xl">Fatores de risco estudados</h1>
        <div className="flex gap-10 flex-wrap justify-center items-start w-full">
          <CardImgComp
            src={icone1}
            title={"Dieta rica em carnes processadas"}
            text={`Qualquer consumo (em gramas por dia) de carne qconservada por
              defumação, cura, salga ou adição de conservantes químicos.`}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone2}
            title={"Dieta rica em bebidas açucaradas"}
            text={
              "Qualquer consumo (em gramas por dia) de bebidas com ≥50 kcal por porção de 226,8 gramas, incluindo bebidas carbonatadas, refrigerantes, bebidas energéticas e bebidas de frutas, porém incluindo sucos 100% fruta."
            }
            hCard={"80 mmd:h-[25rem]"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone3}
            title={"Dieta rica em sódio"}
            text={`Média da excreção urinária de sódio em 24 horas (em gramas por dia) maior que 3 gramas.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone4}
            title={"Dieta rica em ácidos graxos trans"}
            text={`Qualquer consumo (em percentual do total energético diário) de gorduras trans de todas as fontes, principalmente óleos vegetais parcialmente hidrogenados e produtos derivados de ruminantes.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone5}
            title={" Índice de Massa Corporal (IMC) elevado"}
            text={`Para adultos (20 anos ou mais), o IMC elevado é definido como IMC maior que 20–25 kg/m² . Para crianças (1-19 anos), é definido baseado nos padrões da  International Obesity Task Force.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone7}
            title={"Riscos Metabólicos"}
            text={`Níveis alterados de glicemia, colesterol sanguíneo e pressão arterial.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone6}
            title={"Consumo de álcool"}
            text={`Consumidores de álcool são definidos como indivíduos que consumiram pelo menos uma dose de bebida alcoólica no último ano. Entre consumidores de álcool, o nível de esposição foi estimado com base na quantidade média em gramas de álcool puro consumidas por dia.
            `}
            hCard={"full"}
            alt={"Icone1"}
          ></CardImgComp>
          
        </div>
      </div>

      {/* PARTE ARTIGOS */}

      <div id="artigos" className="relative flex justify-center items-center h-full w-full pt-60 mmd:pt-32 mb-64">
        <div className="absolute flex flex-col mmd:!w-[80%] mmd:left-10 mmd:mt-36 justify-center items-start left-24 bg-white p-4 mlg:w-[40%] w-[50%] z-50 rounded-lg">
          <p className="pb-4 text-blue text-5xl font-serif ">
            Artigos Científicos
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="absolute right-0 mlg:w-[70%] mmd:!w-full w-[55%]">
          <img src={figura6} alt="imagem3" className="rounded-lg" />
        </div>
      </div>
      <ArticleComp
        src={artigo1}
        title={`Burden of non-communicable diseases attributable to dietary risks in
        Brazil`}
        text={`Burden of non-communicable diseases attributable to dietary risks in
            Brazil, 1990-2019: an analysis of the Global Burden of Disease Study
            2019`}
        textSwal={`Autoria: Ísis Eloah Machado*, Magda do Carmo Parajára*, Larissa
        Fernanda Fonseca Guedes, Adriana Lúcia Meireles, Mariana Carvalho de
        Menezes, Mariana Santos Felisbino-Mendes, Eliseu Verly-Junior, Deborah
        Carvalho Malta. *These authors contributed equally to the work. `}
        autorSwal={`Autor
        correspondente: Prof. Ísis Eloah Machado. E-mail:
        isiseloah@gmail.com `}
        hrefArtigo={`https://doi.org/10.1590/0037-8682-0282-2021`}
        artigo={`doi.org/10.1590/0037-8682-0282-2021`}
      />
      <ArticleComp
        src={artigo2}
        title={`Health impacts of sodium consumption in Brazil`}
        text={`Health impacts caused by excessive sodium consumption in Brazil: results of the GBD 2019 study
        `}
        textSwal={`Autoria:
        Larissa Fernanda Fonseca Guedes,
        Mariana Santos Felisbino-Mendes,
        Aline Siqueira Fogal Vegi,
        Adriana Lúcia Meireles,
        Mariana Carvalho de Menezes,
        Deborah Carvalho Malta e
        Ísis Eloah Machado.
        
      
        `}
        autorSwal={`  Autor correspondente: Prof. Ísis Eloah Machado. E-mail:
        isiseloah@gmail.com`}
        hrefArtigo={`https://doi.org/10.1590/0037-8682-0266-2021`}
        artigo={`doi.org/10.1590/0037-8682-0266-2021`}
      />
      <ArticleComp
        src={artigo3}
        title={`Burden of non-communicable chronic diseases attributable to the consumption of sugar-sweetened beverage, 1990–2019`}
        text={`Burden of non-communicable chronic diseases attributable to the consumption of sugar-sweetened beverage, 1990–2019`}
        textSwal={`Autoria:
        Joice Silva Vieira Leal,
        Aline Siqueira Fogal Vegi,
        Adriana Lúcia Meireles,
        Ísis Eloah Machado e 
        Mariana Carvalho de Menezes.
        
        
        `}
        autorSwal={`Autor correspondente: Mariana Carvalho de Menezes. E-mail: mariana.menezes@ufop.edu.br`}
        hrefArtigo={`https://clinicalnutritionespen.com/article/S2405-4577(22)00448-X/fulltext`}
        artigo={`clinicalnutritionespen.com/article/S2405-4577(22)00448-X/fulltext`}
      />
      <ArticleComp
        src={artigo4}
        title={`Health economic impacts associated with the consumption of sugar-sweetened beverages in Brazil`}
        text={`Health economic impacts associated with the consumption of sugar-sweetened beverages in Brazil`}
        textSwal={`Autoria:
        Joice Silva Vieira Leal,
        Aline Siqueira Fogal,
        Adriana Lúcia Meireles,
        Letícia de Oliveira Cardoso,
        Ísis Eloah Machado e 
        Mariana Carvalho de Menezes.
        `}
        autorSwal={`Autor correspondente: Mariana Carvalho de Menezes. E-mail: mariana.menezes@ufop.edu.br`}
        hrefArtigo={`https://www.frontiersin.org/articles/10.3389/fnut.2022.1088051/full`}
        artigo={`www.frontiersin.org/articles/10.3389/fnut.2022.1088051/full`}
      />
      <ArticleComp
        src={artigo5}
        title={`Editorial: Economic and health impacts of dietary interventions`}
        text={`Editorial: Economic and health impacts of dietary interventions`}
        textSwal={`Autoria:
        Eliseu Verly-Jr,
        Isis Eloah Machado e
        Eduardo Augusto Fernandes Nilson. 
        `}
        autorSwal={`Correspondência: Eliseu Verly-Jr, eliseujunior@gmail.com; Isis Eloah Machado, isiseloah@gmail.com; Eduardo Augusto Fernandes Nilson, edunilson@gmail.com
        `}
        hrefArtigo={`https://www.frontiersin.org/articles/10.3389/fnut.2023.1283108/full`}
        artigo={`www.frontiersin.org/articles/10.3389/fnut.2023.1283108/full`}
      />
      <ArticleComp
        src={artigo6}
        title={`Chronic diseases attributable to a diet rich in processed meat in Brazil: Burden and financial impact on the healthcare system`}
        text={`Chronic diseases attributable to a diet rich in processed meat in Brazil: Burden and financial impact on the healthcare system
        `}
        textSwal={`Autoria:
        Carla Eduarda Faustino Rocha,
        Magda do Carmo Parajára,
        Ísis Eloah Machado,
        Aline Siqueira Fogal Vegi,
        Mariana Carvalho de Menezes e 
        Adriana Lúcia Meireles. 
        `}
        autorSwal={`Autor correspondente: Adriana Lúcia Meireles. E-mail:
        adriana.meireles@ufop.edu.br`}
        hrefArtigo={`https://www.frontiersin.org/articles/10.3389/fnut.2023.1114766/full`}
        artigo={`www.frontiersin.org/articles/10.3389/fnut.2023.1114766/full`}
      />
      <ArticleComp
        src={artigo7}
        title={`Health and economic impacts of diet changes`}
        text={`Avoidable diet-related deaths and cost-of-illness with culturally optimized modifications in diet: The case of Brazil`}
        textSwal={`Autoria:
        Eliseu Verly Jr,
        Ísis Eloah Machado,
        Adriana Lúcia Meireles e 
        Eduardo A. F. Nilson. 
        `}
        autorSwal={`Autor correspondente: Eliseu Verly Jr. E-mail: eliseujunior@gmail.com`}
        hrefArtigo={`https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0288471`}
        artigo={`journals.plos.org/plosone/article?id=10.1371/journal.pone.0288471`}
      />
      <ArticleComp
        src={artigo8}
        title={`Burden of ischemic heart disease attributable to trans fatty acids, 1990–2019`}
        text={`Burden of ischemic heart disease attributable to trans fatty acids, 1990–2019`}
        textSwal={`Autoria:
        Magda do Carmo Parajára, 
        Ísis Eloah Machado, 
        Eliseu Verly-Junior, 
        Mariana Carvalho de Menezes, 
        Eduardo Augusto Fernandes Nilson e
        Adriana Lúcia Meireles. 
        `}
        autorSwal={`Autor correspondente: Adriana Lúcia Meireles. E-mail:
        adriana.meireles@ufop.edu.br`}
        hrefArtigo={`https://www.sciencedirect.com/science/article/abs/pii/S2405457723005363`}
        artigo={`www.sciencedirect.com/science/article/abs/pii/S2405457723005363`}
      />
      <ArticleComp
        src={artigo9}
        title={`Mortality attributable to diets low in fruits, vegetables, and whole grains in Brazil in 2019: evidencing regional health inequalities`}
        text={`Mortality attributable to diets low in fruits, vegetables, and whole grains in Brazil in 2019: evidencing regional health inequalities`}
        textSwal={`Autoria:
        Magda do Carmo Parajára, 
        Zoe Colombet, 
        Ísis Eloah Machado, 
        Mariana Carvalho de Menezes, 
        Eliseu Verly-Junior, 
        Martin O'Flaherty e
        Adriana Lúcia Meireles. 
        `}
        autorSwal={`Autor correspondente: Adriana Lúcia Meireles. E-mail:
        adriana.meireles@ufop.edu.br`}
        hrefArtigo={`https://www.sciencedirect.com/science/article/pii/S0033350623003232`}
        artigo={`www.sciencedirect.com/science/article/pii/S0033350623003232`}
      />

      {/* PARTE EQUIPE */}

      <div id="equipe" className="relative flex justify-center items-center h-full w-full mmd:pt-32 pt-60 mmd:mb-36 mb-64">
        <div className="absolute flex flex-col justify-center items-start left-24 bg-white p-4 mlg:w-[40%] mmd:!w-[80%] mmd:left-12 mmd:mt-32 w-[50%] z-50 rounded-lg">
          <p className="pb-4 text-blue text-5xl font-serif ">Nossa Equipe</p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="absolute right-0 mmd:!w-full mlg:w-[70%] w-[55%]">
          <img src={figura7} alt="imagem3" className="rounded-lg" />
        </div>
      </div>
      {/* <div className="p-4 h-full flex mmd:flex-col justify-center mx-10 mmd:mx-2 shadow-xl cursor-default bg-[#f7f7f7] shadow-gray-800 mb-10 rounded-md"> */}
      <div className="md:w-full h-full my-16 flex flex-col flex-wrap items-center justify-center gap-6 bg-white">
        <div className="flex flex-col items-center w-full">
          <p className="pb-2 text-blue text-3xl font-semibold font-serif ">
            Equipe 1: Pesquisadores
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={isis}
            name={"Ísis Eloah Machado"}
            alt={"Isis"}
            descc={
              "Professora e pesquisadora da Escola de Medicina da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/0150005556742996"}
          />
          <TeamCard
            img={mariana}
            name={"Mariana Carvalho de Menezes"}
            alt={"Mariana"}
            descc={
              "Professora e pesquisadora da Escola de Nutrição da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/8894598416587453"}
          />
          <TeamCard
            img={adriana}
            name={"Adriana Lúcia Meireles"}
            alt={"Adriana"}
            descc={
              "Professora e pesquisadora da Escola de Nutrição da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/5415462090135377"}
          />
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={marianaF}
            name={"Mariana Santos Felisbino Mendes"}
            alt={"Mariana"}
            descc={
              "Professora e Pesquisadora da Escola de Enfermagem da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/5074825535350952"}
          />
          <TeamCard
            img={deborah}
            name={"Deborah Carvalho Malta"}
            alt={"Deborah"}
            descc={
              "Professora e Pesquisadora da Escola de Enfermagem da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/3261263738543724"}
          />
          <TeamCard
            img={jorge}
            name={"Jorge Gustavo Velásques Meléndez"}
            alt={"Jorge"}
            descc={
              "Professor e Pesquisador da Escola de Enfermagem da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/8406550065682773"}
          />
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={eliseu}
            name={"Eliseu Verly Junior"}
            alt={"Eliseu"}
            descc={
              "Professor e Pesquisador do Instituto de Medicina Social da Universidade Estadual do Rio de Janeiro (UERJ)"
            }
            lattes={"http://lattes.cnpq.br/9014880928943124"}
          />
          <TeamCard
            img={leticia}
            name={"Letícia de Oliveira Cardoso"}
            alt={"Letícia"}
            descc={
              "Pesquisadora da Escola Nacional de Saúde Pública da Fundação Oswaldo Cruz (Fiocruz - Manguinhos)"
            }
            lattes={"http://lattes.cnpq.br/7425850404169766"}
          />
          <TeamCard
            img={luisa}
            name={"Luísa Sorio Flor"}
            alt={"Luísa"}
            descc={
              "Pesquisadora do Institute for Health Metrics and Evaluation (IHME) na Universidade de Washington"
            }
            lattes={"http://lattes.cnpq.br/8883026435305801"}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <p className="pb-2 text-blue text-3xl font-semibold font-serif mt-10">
            Equipe 2: Pesquisadores Pósdoc
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={aline}
            name={"Aline Siqueira Fogal Vegi"}
            alt={"Aline"}
            descc={
              "Posdoc do Programa de Pós-graduação em Saúde e Nutrição da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/3807473363338251"}
          />
          <TeamCard
            img={renato}
            name={"Renato Azeredo Teixeira"}
            alt={"Renato"}
            descc={
              "Posdoc do Programa de Pós-graduação em Saúde Pública da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/2666515683002219"}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <p className="pb-2 text-blue text-3xl font-semibold font-serif mt-10">
            Equipe 3: Estudantes de Pós-graduação
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={magda}
            name={"Magda do Carmo Parajára"}
            alt={"Magda"}
            descc={
              "Doutoranda em Saúde e Nutrição na Universidade Federal de Ouro Preto"
            }
            lattes={"http://lattes.cnpq.br/4042133418405830"}
          />
          <TeamCard
            img={larissa}
            name={"Larissa Fernanda Fonseca Guedes"}
            alt={"Larissa"}
            descc={
              "Doutoranda em Saúde e Nutrição na Universidade Federal de Ouro Preto"
            }
            lattes={"http://lattes.cnpq.br/4992158369678870"}
          />
          <TeamCard
            img={joice}
            name={"Joice Silva Vieira Leal"}
            alt={"Luísa"}
            descc={
              "Mestranda em Saúde e Nutrição na Universidade Federal de Ouro Preto."
            }
            lattes={"http://lattes.cnpq.br/0140843661461134"}
          />
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={luane}
            name={"Luane Pinheiro Rocha"}
            alt={"Luísa"}
            descc={
              "Mestranda em Enfermagem na linha de pesquisa de Saúde Coletiva na Universidade Federal de Minas Gerais."
            }
            lattes={"http://lattes.cnpq.br/7594791803691153"}
          />
          <TeamCard
            img={carla}
            name={"Carla Eduarda Faustino Rocha"}
            alt={"Luísa"}
            descc={
              "Mestranda em Saúde e Nutrição na Universidade Federal de Ouro Preto."
            }
            lattes={"http://lattes.cnpq.br/6357170308305576"}
          />
        </div>
      </div>
    
    <Footer></Footer>
    </>
  );
}

export default Main;
