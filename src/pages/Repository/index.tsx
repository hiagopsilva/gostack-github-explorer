import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIQAsAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xAA6EAACAQMDAgMFBQcEAwEAAAABAgMABBEFEiExQQYTURQiYXGRFSMygaEzQlKxwdHwFlNi4QckkkP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQACAgEEAgICAwAAAAAAAAAAAQIRAxITITFBUQQyImEUI3H/2gAMAwEAAhEDEQA/APQS0U0eyYBh3zTY/KhJ8lAufhXZYtrcCosEV5rhjl+TOpymuB92sE0HlyKB/wAh2oD1/wANpNIJ7YyOrFvM56+lFd9qENtBI0ivgDkhabGyNaxuq4G3Jz8aUXGvxYNtsC/DXh5LXUPPkYNIB7iN6kVfurL2jVvMvW+9QAhB049a2rS1MWqXMxQ+XuBTHyqZLIT3dw8sRG9fczUThJ20wXAPw6ZfarcNGwZbVJM7jx0rbtdClhmW4tFWRwdoWQ8Y9a0LG0+zrA7yWbGZOc5q0blRbERqFcjIGecVmouPLNE0Ytxo89zdzPcspRcDEfb1FWDBYabD7OJEUsuCvXbWrbwO0MpiOJHxljXLLw3Elx51yyzSu27JGalp6riuwbpEV17LfaQtudqxggb+xFCXjBNMu7iOCwTbKkQiSQAbWNafjSe7+07fSrS0KxkgrKFwMntQlr+k+JkVLY2jRQMwCFedx9fhXUsU/ZjqQ60s9TtgkcrHaFKrtPLH4Vi3WlsXlhFufNQEuAeR86vabpfivRdRjvzYySx25JBc5Uk8Ve037Q1+efy5jBdXLFZtq8fIVo4eWGoCxpN48Et5bzBI4fxbn5J9AKsaV4mv9NsnghR1y2WkUHOa9l8NeCLDTbNWmtla6bO5nO6tBtG06xtZoYxbwyTZ2tIB1/OjfguBaLPAZtaurpW83Mw9GJzWRbXU9hdCe3fY5/SvQ9VsXl1VYGS0iZeGkj4WX5fGrf8ApPw5aafP9uX226Ye6FP4Pl6096PTQaH4AGZZrtGa4+/yNwcCsZcB8kcA1p39pd6aXe1M5sm4SYqQGFVjp10tol0U3QSHAcHIB+NbwSiuOjORJYahJYyHYiSo595XGRRMmtabJMWjla1VYxyi5OR2oO4QEHqaYAPyqnFMR9SNcr6UwujDpzVTf8a6Hryk0jvcWK5hS4iaNhlW6is66Ro2QyZCMwQKhrS3j1qTEE20SDO07h86maTpgoMjQBOEU4J710cSH1qxeTQRRlifgNoqnbpIx3sTk9jTjmXSFtlwgOMEZBpQaekchkALMR1Y1wKy4zUntDDvRKSkPRRJOtxGAIFUE9Wq9YQsrh2kJPcVnrcMerVbgucEc1KlTtsUoNo1hbQyFXkjR3U5ViOlZPipJ7q1NlaWskk0i5WVTgJ+daMN0vHNWPaEI6134/k43HlnG4STAPQvCmpzR3EOuTyJanhYlcnJ9c1v6Zomn6JEY7KEDJyWPWtae6UDrWbcXGT1rnzZoydJm2ODfLLEkv3MhjOXwcZ9a8/vNO1fxOjm4jKyQnamSVU80WtMQcg11L1k4G0D4CsE6NnjYOWngmWdFXVZYkRPwpbjn8ya2F8P6Pp9k49jSRQvvs43MRWh7WjdWFRPdoARmk5SYRxgRIdK8i50p18/T5hmDeP2RPavOvEGkXfhqeS3juFuLSYZZFOQvz+Net67YR3dsWto1S4DAhgMZrKvPCK6hboJr5oHK4kCrndn51vjy6Xz0TPG2uDxORkMxb93PQ1K/lm1ZtoQ54AHWrviDTU0jVri0ikEqxtgPislmZvxHIzx8K9FVKqOR8cM+jA5Ipy7j0FDdtrodgr5TPeryXe4giUYJ7GvIlCS7PajGMujVaTaea6shPQVQaaPaC0oB+NQS6ysS4GDj0pJSfRTgl2ajYZg7OcjtThPjB6ULjxLDLNJEqgyp1UnFSHW22ACIA/OmsDXNGWqHsKfPkcdScU4tJt3FTj1oYttcdeCNtaqXpnjA9oTHpmlKEkVGMZdGgJ/jUgnK81le9nCOrfI0+SebaAxGPhUM0WI2EvivepPtA461igjGTLUUs+1sISRSqw2Ubb32e9QPdZ71j+0NnvXRK7HpVaR7Rq+eT3rr71GTj61l/efxD60klYN7+SPnR/gbRfD7mxTyj9c1mTXAz7qkH1pQzBgd0jfWjkW0XTIc4PNd87PBOAKo+YgPDmk+wD8dA1iPNf/ACLYLa6y0sQys67yfjQYOTwK9e8W2MN/pcpDKZIxuBryd12txXqfGnqjyeT8vE4TPRRBITwjfSpFgnHRXHyolgRCxxg1ZCqOwrmeY7VjQLGO6P4lkPzyaQhmPWNvpRdL5aLnANU9WSf7MmNmAJtmU+dJZeRuJ5Z4qaaw1aOeMsjMvbjOKI9Fuhqdos0YO4cOB2NDGvDVZnhj1Pazp0461veAYL1bxgipHAw9/AzmuubWizjg/wCx8cGz7NL/AAN9KettPnIjf8hRSiISR6VZjEe0fGuN5TtUUCUaXin3VlH1qysl+MbonI+RoqREPpUwRPpWbyJ9otOvIKBrk4zDJ9KX/tA8Rv8AQ0V/djrxTDJDyQw4qdaL3AZzc/7b/Q0i11/tv9KIvPg8veWA/OqI1e0w+WAK9QaWpBumUfav9t/pXM3IH7NvpT38T2yyFR0Hep4/EdlLC2SAelPUvQt79lItO3VXpffr/wDm+T8KjXX41lOMFQa7d+I4ymEyGHpRr/Qt9Dz7R/tt9Kbm4P7jfSqS+LB5bKyjf8qt2Xie3Nu3mAFh2zTt+if5EfZFeJM1rKDG3KHtXktw2JHx2Neu3niG2a2lReNyEfpXj1wfvX+ddvxXdnF82alVHptvrgjQA9c81ONe4OTwD9aEFYPISDx6U8zlTh+B0rkcAWaSDRNaBO78QrRi1lJYdqg9OQTQWsy7QQB061n6hqk9scW/4vU9qyhGUnSNd6uzb12NL2+E3TaMYNWNGv4rLC7gvPpQYl3f3DeZLM3vdBVuK4mSMFxuIrplCSVNmO6tVpBqviBo95XnJPXvXG8RyeUCuc+lC0NyZE3uu3HGM057+GGME557YrBxd0WsoYf6pVNp/CMck+tNXx7YRI/nXC7geAOa83vJbnU7xUA2RDsP51JceHQqB0n5P8QrVYYL7sl5pv6hLqv/AJB88bLJHduxNY3+qNW2sRCee9UI9MubSPzIpULHoAOalhkvVGZo9wHw5rXbxLpWRuTfbLsXiOSfYk87RsD0IrQE/mqSGJ396w/LgvgVZGRviMGuQvNpkoEx3Qjue1Zzxxl9eGCm75L91N5b7O1R+2ErtXjtTp8XJ82MAg88VVjjJZgRilGKrkUpNPgf7WyMc1Ilw3OT16VAVK5yKaqYzjJz+lXpiTqaJTIoON/vntXWTac5qOKMF1PcV2VgpyTz6Uq8BfsuNLG8BX94Cg+fIlbPrRDvG3JyKH7nBlb510/GVNkZHaCFD94HA4rlw7ttxjk81etdMlfBlkCJ3PSrK2FpuGDI5z1zXK8kUzeOCZRaURxrFnLd6inBcYI4PU4ohttFtHbc6nHViWNXPs3TEDAoxx0UtzWW4l0W8MmB7YEYVB07ipY3ATBGaLbXQdOuMuY2SNfxNvPFWPsHSC5IikIPA+8ORVbsfJOzIEAytF0xTZlSQAtzjpRxH4b0vZlkZUUbmO88CpIPC+leXmWKQsxzjeeB2FSpqxvHJAB+FRgYqaOQPGFfPB4+Vegf6S0jHmFXCqCTmQ0+18GaOLZJJYpPMIyfvDVOSZKhJcnnUsoSQJEenc0jcSFQCB1616OPBmiv5jeU4ZVJ/aH0qUeD9FWFQI3O5Afxmnx0Glnm0Ugk6KN9dlthKrbwCSOhr0OTwhpsETSW0bZAyAWJz8Knl8N6SUVlRijKCvvdqlt3wUoccnmtpC1vGUycfyqxLEqrwBnGcjvRrceFrAKZI0kbByV3n3h6V2Tw3pqxLJArlHXOS55FJy8j0M8/kiHHByetKGBgTlfzoybQdP8AMUlH3Z5Xeeabc6RbW65jBKHlTmk8nFAsTuwMNuyyHnFQz25aUDByRRc2nWskm5wzD0U8j41TvNLWP76Nyy9mFVHI7E8AMSjYrZ/dU5HpQ45yxJ70cS6es2/JJ3Dn1rIuPDpQb4/eX512YcsY9mMsMq4NWOZ5295s/AVc81YRsI98jhf6n0FUPakgBSHBf+MjgfL1PxqE3DMSV65yWY/1rm0Wdmo2PavKUBpNzfy/tUlsxkfzJfdjXqazLaMkeZKcJ/Ee5+FSz3g2YjGAOFGe/wDf+VQ4eEO/LNmfUfwomFRei+nxPxq1Z3GWyecdaG7UsSWJAPATuM/9Vpi5NrCoTAkkB2HrtHdv87kVMoVwCdmy92GlK7sRRH3/APnJ6fl/P5VYtr/dy2eSOM0KtcgNGkRwoGMZ5x6n5nNaFnN+yIOTgtjHGScD9KThSsXYQ6jehYUiBO6dwuf+PU/oMfnVx7weWmHzxgAf5/maEry/VtSwW9y3G0H4nk/oB9K69+0oUJ1bgAelGlipBbFffdTnOfu2/Lil7ftjg3HOY1P6UOw3Y8m5IYEbSOvwNQzXuIISpxtiTPPB6D+oo5sK4CxL9ZFVV5YLn9f+qq213m0lhJ5t3wPip5H6HH5VgWuo5fO8hlyMdiD3+ua6bxU1CM8bLhPKYZ7jlf6ilzYUbK6ogVg3QryPlVM6gbSfazf+tOeCf3XP9D/P51hT3bxuSrD3Tj5Ulu0mhMT8huCp/d+H9qrT5A2LicbTh+c89+KqDUDjY/I6MB+98fnWaLxjlXO6VRyf4x6/3/Oqk8xYlkIODzQoDujUuZDEBLExaNu9VjegsSpCno47GoIbkqWRyG3ckE/iH96q3cZXEsX7M+p6fCqUV5Cy5KvmEtCdr4zsP+c1UNzgsHBR88nP86giuymQ5IxyMVM7xTrh8A9nHf51SjXYrvoGPtJy+WjGO/NTw6kd+DCCvZc8Vh+eueh+lPS6RWJw3T0r0HiRxrIzen1yVlysagD8Iz0quurvuyYlOOnvVkm7Qpja3XNNFwo7N9KFhivASyt+Qji1p1C/dD/6ps2uzMGcxAs3U7v0rCW8QAcPxime1KYwuGyPhS2Y+h7rNxNclDE+Sue3vVbTxBMuNsSgADHvUL+0KB0b6VJ7amOj9KHhi/AllaNg63L7xEYOeeTUsWvyo4IiGACB73TjFD4uU242npSFwgPRvpT2o+g3GE0HiCVUdDCDlefeqKTXZsKFTjGB7/WsBbtBnKnp6V1ryMge6wwKnZjfRW66o3k8QzJIh8peP+XUU5/EU0oUmAZU5GH5GCP7Chz2lM5w3X0pG5TaRhqezH0TuyCK51+ZmyIwAR/FUcWtyBgfKHp+LtWHJdIxGA1NW5UEHBOD6U9qNVQbrCGbWXIEnl4KnIYNz8qhGsvuwIxzjPNY8l2jRlQjZNN9pX0PbtS2ohuM2hrDsuGhU4PHPT1qxFrrhPeiXB/F73Wh1blB2b6U72tNhG05oeGL8DWVo1p9ScniIAduaUOpMGA8vgnpurIe7RugYcUlukBU4bg+lPbVULcdkQQUtopUq0szFsGaW0UqVIaOFRXAopUqYHdi/wCGu7FpUqLFR0ItNKiu0qB0hpApAA0qVMR3aKW0UqVIKFtGKWBSpUAcIpYrtKgDhHFdIGKVKgBYFdUA0qVAI//Z" alt="" />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>fskesdmckamskoacmpkcmspacmspcampss</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>45</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertos</span>
          </li>
        </ul>

      </RepositoryInfo>

      <Issues>
        <Link to="xskxmasxs">
          <div>
            <strong>csapcsaopcasp</strong>
            <p>cscpksapocksapcask</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
