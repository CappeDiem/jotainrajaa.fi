import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className={"text-center py-4 border-t-2 border-sky-900 bg-neutral-900 w-screen flex flex-col md:flex-row"}>
            <div className="w-full md:w-1/3 flex flex-col px-8 py-4">
                <p className={"text-neutral-100 text-left"}>
                jotainrajaa.fi
                </p>
                <p className={"text-neutral-400 text-left"}>
                    Tämä on vain kevyttä läppää, joten älä suutu henkilölle, joka lähetti sinut tänne.<br/><br/>
                </p>
                <p className={"text-neutral-400 text-left"}>
                    Tämä sivu on avointa lähdekoodia joka löytää <a className={"text-sky-400"} href="https://github.com/CappeDiem/jotainrajaa.fi">GitHubissa</a>.
                </p>
                <div className={"flex flex-row mt-4"}>
                    <a href={"https://github.com/CappeDiem/jotainrajaa.fi"} target={"_blank"}
                       className={"flex flex-col items-center justify-center transition-colors hover:text-sky-400"}>
                        <FontAwesomeIcon icon={faGithub} className={"text-2xl"}/>
                    </a>
                </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col p-4">
            </div>

        </div>
    )
}