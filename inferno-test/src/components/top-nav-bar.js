import Inferno from 'inferno';
import Component from 'inferno-component';

class TopNavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Coletar</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <form class="navbar-form navbar-right">
              <div class="form-group">
                <input type="text" placeholder="palavra-chave" class="form-control" />
              </div>
              <button type="submit" class="btn btn-success">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;