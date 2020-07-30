import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <div>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="#">
        <img
          src="https://avatars1.githubusercontent.com/u/47197695?s=460&u=2e7491adf00d02183572824bb43115820a04dfcc&v=4"
          alt="Hiago Prates"
        />

        <div>
          <strong>Hiago Prates/Gostack</strong>
          <p>Teste no span do repository</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img
          src="https://avatars1.githubusercontent.com/u/47197695?s=460&u=2e7491adf00d02183572824bb43115820a04dfcc&v=4"
          alt="Hiago Prates"
        />

        <div>
          <strong>Hiago Prates/Gostack</strong>
          <p>Teste no span do repository</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img
          src="https://avatars1.githubusercontent.com/u/47197695?s=460&u=2e7491adf00d02183572824bb43115820a04dfcc&v=4"
          alt="Hiago Prates"
        />

        <div>
          <strong>Hiago Prates/Gostack</strong>
          <p>Teste no span do repository</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </div>
);

export default Dashboard;
