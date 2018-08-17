import React, { Component} from 'react';

import { Logo } from '@cathodevel/quantum';

import { connect } from 'react-redux';
import { clickButton } from '../actions/index';

class JobadDetail extends Component {

  buttonClicked = () => {
    this.props.clickButton("blablabla");
  }

  render() {
    console.log(this.props);

    return (
	<div className="jobad-container">
		<header className="jobad-detail-header">
			<Logo.Candidate className="logo" />
			<div className="user-area">
				<img src="https://www.catho.com.br/images/site/avatarM.jpg" className="user-thumb" alt="descrição da imagem" />
				<strong className="user-info">
					nome do candidato
					<a href="#">sair</a>
				</strong>
			</div>
		</header>
		<section className="jobad-description">
			<h1>Título da vaga</h1>
			<strong className="jobad-info-vacant">
				<span className="total">1 vaga</span>
				<time pubdate="2018-07-23"> - segunda, 23/07</time>
			</strong>

			<em className="jobad-info">
				<span className="salary">A combinar </span>
				<address>São Paulo <abbr title="São Paulo">SP</abbr></address>
			</em>

			<strong className="company-name">Empresa confidencial</strong>

			<section className="description">
				<section className="curriculum-status-desktop">
					<button>vaga expirada</button>
				</section>
				<p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Quem num gosta di mim que vai caçá sua turmis! In elementis mé pra quem é amistosis quis leo.</p>
			</section>

		</section>
		<section className="jobad-details"></section>
		<section className="company-info"></section>
		<section className="curriculum-status-mobile">
			<button>vaga expirada</button>
		</section>
		<footer></footer>
	</div>
    );
  }
}

function mapStateToProps(state) {
  return {
      contentClicked: state.click
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//       clickButton: clickButton
//   }, dispatch);
// }


export default connect(mapStateToProps, { clickButton })(JobadDetail);
