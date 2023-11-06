import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./Profile.module.css";
import ToggleProfileInfo from "./ToggleProfileInfo/ToggleProfileInfo";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <CommonHeader title={user && user.userName && user.userName} />
      <div className={Styles.avatar}>
        <Avatar className={Styles.avatar__profile__pic} />
      </div>
      <Container fluid className="mb-5">
        <Row>
          <Col md={8}>
            <Paper className="p-5 m-3 shadow">
              <Typography
                className="text-center text-primary pb-4"
                variant="h5"
              >
                Informações do seu perfil
              </Typography>
              <ToggleProfileInfo
                exp={true}
                link="edit-profile"
                title="Detalhes do usuario"
                value1="Editar Perfil"
                value2="Endereço Email"
              />

              <ToggleProfileInfo
                link="privacy-policies"
                title="Privacidade e políticas"
                value1="Resumo de retenção de dados"
              />

              <ToggleProfileInfo
                link="course-details"
                title="Detalhes do curso"
                value1="Detalhes do curso"
              />

              <ToggleProfileInfo
                link="Planos de aprendizagem"
                title="Diversas"
                value1="Blog"
                value2="Planos de aprendizagem"
              />
              <ToggleProfileInfo
                link="grades"
                title="Relatórios"
                value1="Sessões do navegador"
                value2="Visão geral das notas"
              />
              <ToggleProfileInfo
                title="Mobile app"
                value1="Este site tem acesso a aplicativos móveis habilitado.
                Baixe o aplicativo móvel."
              />
            </Paper>
          </Col>
          <Col md={4} className="">
            <Paper className="p-4 m-3 d-flex flex-column shadow">
              <Typography className="my-3 text-primary" variant="h5">
                Perfil
              </Typography>
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Nome de Usuário
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.userName}
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Linguagem Preferida
              </Typography>
              <Typography variant="body1">English</Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Primeiro acesso ao site
              </Typography>
              <Typography variant="body1">
                Sunday, 14 February 2021, 8:44 AM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Ultimo acesso ao site
              </Typography>
              <Typography variant="body1">
                Wednesday, 5 May 2021, 2:44 PM
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Endereço de Email
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.email}
              </Typography>
            </Paper>

            {
                user && user.role==="Student" &&  <Paper className="shadow p-4 d-flex flex-column m-3">
                <Typography className="my-3 text-primary" variant="h5">
                  Atividade Recente
                </Typography>
  
                <Typography
                  className="my-2"
                  style={{ color: "gray" }}
                  variant="body2"
                >
                  Cursos que estou fazendo
                </Typography>
                <Typography variant="body1">9</Typography>
              </Paper>
                
              }

           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
