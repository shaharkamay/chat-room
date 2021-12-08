import ghLogo from '../GitHub-Mark-32px.png';

function Credit({ ghName, ghLink }) {
    return (
        <a className="copyright-link" href={ghLink} target="_blank" rel="noopener noreferrer">
            <span>{ghName}</span>
            <img src={ghLogo} className="github-img" alt="" />
        </a>
    )
}

export default Credit;