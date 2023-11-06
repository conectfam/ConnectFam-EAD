import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoticeToggleRow from './NoticeToggleRow/NoticeToggleRow';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { toggleTitle } from '../ToggleData/ToggleData';
import { Divider } from '@material-ui/core';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ExtensionIcon from '@material-ui/icons/Extension';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin:"10px 0px",
    

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



const NoticeToggle = ({exp}) => {
    const classes = useStyles();
  
    return (
        <div>
          {
            toggleTitle.map(({id,title})=>{
              return(
                <div key={id} className={classes.root}>
                <Accordion style={{backgroundColor:"#EDEFF7"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{title}</Typography>
                  </AccordionSummary>
                  <Typography className='mx-3 my-2' variant="h6">{title}</Typography>
                  <Typography className='mx-5 my-2' variant="h6">Materiais de aula</Typography>
                  <AccordionDetails>
                    
                    
                    <NoticeToggleRow
                    
                    Icon={NoteAddIcon}
                    title="Anúncio do curso"
                    description="Notícias gerais e comunicados dos professores para os alunos do curso. Os professores usarão esta atividade para postar atualizações do curso e os alunos serão automaticamente inscritos neste anúncio para atualizações rápidas."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={MovieFilterIcon}
                    title="
                    Arquivo de documento de aula (apresentação)"
                    description="Este é o material principal do professor da aula. Pode ser um documento do Word, PDF ou PowerPoint. Basta editar esta atividade e anexar o arquivo do documento na seção de arquivos. Os professores podem usar o campo de descrição para fornecer orientações adicionais aos alunos sobre como ler o documento."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={ExtensionIcon}
                    title="Recurso externo para o URL da lição"
                    description="Clique em Editar e substitua o título e o URL externo para adicionar recursos externos relevantes para a lição."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <Typography variant="h6">
                    Atividades de aula
                    </Typography>
                    <AccordionDetails>
                      <Divider/>
                    </AccordionDetails>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={InsertCommentIcon}
                    title="Discussão sobre a lição"
                    description='Use o fórum de discussão para envolver os alunos em discussões relevantes aos tópicos da aula. É uma boa maneira de envolvê-los em estudos entre pares e ajudar uns aos outros na aprendizagem junto com o professor. Existem vários tipos de fórum. Este é um fórum de discussão de perguntas e respostas onde os alunos podem fazer perguntas e responder uns aos outros. O professor também pode fornecer feedback sobre o envio. É melhor criar alguns tópicos de discussão com algumas perguntas para os alunos responderem. Para fazer isso, clique no botão "Adicionar uma nova pergunta". Clique em editar para alterar as configurações e personalizar de acordo com a necessidade.'
                    />
                    <Divider/>
                  </AccordionDetails>
                </Accordion>
                
                
              </div>

              )
            })
          }
            
            
        </div>
    );
};

export default NoticeToggle;