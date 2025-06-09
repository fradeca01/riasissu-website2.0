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
        description: "Coordinatrice del progetto RIASISSU",
        picture: coordinatore_photo
    },
    {
        id: "vice",
        nome: "Giovanni",
        cognome: "Papi",
        ruolo: "Coordinatore Nazionale Vicario",
        description: "",
        picture: vice_photo
    },
    {
        id: "segretario",
        nome: "Giorgia",
        cognome: "Pazzi",
        ruolo: "Segretaria",
        description: "Giorgia Pazzi è un'Allieva al quinto anno della Scuola di Studi Superiori \"G. Leopardi\" dell'Università di Macerata, e Rappresentante nella RIASISSU dal 2023. Laureata triennale in \"Lingue e culture straniere occidentali e orientali\" e alla fine del suo percorso magistrale in \"Lingue, culture e traduzione letteraria\", i suoi principali interessi ruotano intorno allo studio della letteratura - con una particolare predilezione per quella russa e per Dostoevskij -, ma spaziano anche dalla psicologia e criminologia all'ambito politico-economico, dalla sociologia alla filosofia. Si considera inoltre un'Allieva molto affezionata della propria Scuola, e crede che lo spirito di Rete promosso da RIASISSU sia fondamentale ad uno sviluppo sempre maggiore della comunità di cui tutt3 l3 Alliev3 delle Scuole di Studi Superiori Universitari fanno parte.",
        picture: segretario_photo
    },
    {
        id: "tesoriere",
        nome: "Vittorio",
        ruolo: "Tesoriere",
        cognome: "Magnaguagno",
        description: "Vittorio Magnaguagno è un allievo della classe di Scienze Sociali della Scuola Galileiana di Studi Superiori ed è iscritto al corso di laurea in Scienze Psicologiche Sociali e del Lavoro presso l'Università degli Studi di Padova. I suoi interessi accademici ricadono principalmente negli ambiti della psicologia applicata, nello specifico verso le dimensioni legate alla psicologia dei gruppi e alla psicologia della decisione. Oltre a ciò si diverte a giocare con i lego, ascoltare musica classica e cucinare ottimi risotti. Dall’estate 2024 ricopre il ruolo di rappresentante Riasissu per la Scuola Galileiana e dal dicembre dello stesso anno è parte della Giunta Esecutiva in qualità di tesoriere, supportando la Coordinatrice Nazionale nell’amministrazione delle risorse della rete e nei principali adempimenti burocratici.",
        picture: tesoriere_photo
    }
]