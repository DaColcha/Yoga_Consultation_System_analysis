import { AsanaCard } from "../components/asana_card";
import '../styles/menu_asanas.css';

export function ElementoAsanas() {
    return (
        <>
            <header id='header'>
                <div id='header-title-section'>
                    <h1>Nombre Posicion</h1>
                </div>
            </header>
            <main id='menu-content'>
            
            <AsanaCard name_es="Nombre Asana" sanskrit="Sanscrito" name_en="Nombre ingles" link="" image="https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/03/yoga-relax-768x506.jpg" morpheme="Mor·phe·ma"/>
            </main>
        </>
    )
}
