import coordinatore_photo from '../../assets/giunta/placeholder.svg'
import tesoriere_photo from '../../assets/giunta/vittorio_magnaguagno.png'
import vice_photo from '../../assets/giunta/placeholder.svg'
import segretario_photo from '../../assets/giunta/giorgia_pazzi.png'

export const giuntaData = [
    {
        id: "coordinatore",
        nome: "Maddalena",
        cognome: "Feltrin",
        ruolo: "Coordinatrice Nazionale",
        scuola: "Scuola Superiore di Toppo Wassermann di Udine",
        description: "Maddalena Feltrin è allieva al III anno della \"Scuola Superiore di Toppo Wassermann\" dell'Università di Udine. Laureanda in lettere classiche, si interessa di letteratura, archeologia e didattica. Creativa e intraprendente, ama viaggiare, cucinare e disegnare; nel tempo libero si dedica ad attività di volontariato e nel futuro vorrebbe diventare una professoressa. Rappresentante per la sua Scuola da gennaio 2024 e referente di commissione Orientamento, da quest'anno ha deciso di impegnarsi ancor di più per la Rete al fine di organizzare e coordinare nuove concrete occasioni di scambio tra lɜ sociɜ: il sentimento di appartenenza a un'Associazione nazionale e il quotidiano dialogo tra allievɜ sono le opportunità promosse dalla Rete che più le stanno a cuore.",
        picture: coordinatore_photo
    },
    {
        id: "vice",
        nome: "Giovanni",
        cognome: "Papi",
        scuola: "Scuola Superiore Sant'Anna di Pisa",
        ruolo: "Coordinatore Nazionale Vicario",
        description: "",
        picture: vice_photo
    },
    {
        id: "segretario",
        nome: "Giorgia",
        cognome: "Pazzi",
        ruolo: "Segretaria",
        scuola: "Scuola di Studi Superiori \"G. Leopardi\" di Macerata",
        description: "Giorgia Pazzi è un'Allieva al quinto anno della Scuola di Studi Superiori \"G. Leopardi\" dell'Università di Macerata, e Rappresentante nella RIASISSU dal 2023. Laureata triennale in \"Lingue e culture straniere occidentali e orientali\" e alla fine del suo percorso magistrale in \"Lingue, culture e traduzione letteraria\", i suoi principali interessi ruotano intorno allo studio della letteratura - con una particolare predilezione per quella russa e per Dostoevskij -, ma spaziano anche dalla psicologia e criminologia all'ambito politico-economico, dalla sociologia alla filosofia. Si considera inoltre un'Allieva molto affezionata della propria Scuola, e crede che lo spirito di Rete promosso da RIASISSU sia fondamentale ad uno sviluppo sempre maggiore della comunità di cui tutt3 l3 Alliev3 delle Scuole di Studi Superiori Universitari fanno parte.",
        picture: segretario_photo
    },
    {
        id: "tesoriere",
        nome: "Vittorio",
        ruolo: "Tesoriere",
        scuola: "Scuola Galileiana di Studi Superiori di Padova",
        cognome: "Magnaguagno",
        description: "Vittorio Magnaguagno è un allievo della classe di Scienze Sociali della Scuola Galileiana di Studi Superiori ed è iscritto al corso di laurea in Scienze Psicologiche Sociali e del Lavoro presso l'Università degli Studi di Padova. I suoi interessi accademici ricadono principalmente negli ambiti della psicologia applicata, nello specifico verso le dimensioni legate alla psicologia dei gruppi e alla psicologia della decisione. Oltre a ciò si diverte a giocare con i lego, ascoltare musica classica e cucinare ottimi risotti. Dall’estate 2024 ricopre il ruolo di rappresentante Riasissu per la Scuola Galileiana e dal dicembre dello stesso anno è parte della Giunta Esecutiva in qualità di tesoriere, supportando la Coordinatrice Nazionale nell’amministrazione delle risorse della rete e nei principali adempimenti burocratici.",
        picture: tesoriere_photo
    }
]