/*const username = 'Narasimhamurty456';
const repository1 = 'form_a_story';
const linkone = document.getElementById('github-formastory');
linkone.href = 'https://github.com/Narasimhamurty456/form_a_story';*/
/*const repository2 = 'pianokeys';
const linktwo = document.getElementById('github-pianokeys');
linktwo.herf = 'https://github.com/Narasimhamurty456/piano_keys';*/

/*const pagelink_formastory = document.getElementById('formastory-page');
pagelink_formastory.href = 'https://narasimhamurty456.github.io/form_a_story/';*/

/*const pagelink_pianokeys = document.getElementById('pianokeys-page');
pagelink_pianokeys.href = 'https://narasimhamurty456.github.io/piano_keys';*/

// Function to call Github repository
const linkToGithubRepository = (username, repository, elementId) => {
    const link = document.getElementById(elementId);
    link.href = `https://github.com/${username}/${repository}/`;
    return link.href ;
}
linkToGithubRepository('Narasimhamurty456', 'form_a_story', 'github-formastory');
linkToGithubRepository('Narasimhamurty456', 'piano_keys', 'github-pianokeys');
linkToGithubRepository('Narasimhamurty456', 'ball_badminton', 'github-ballbadminton');

//Function to call page-link

const linkToProjectPage = (username1, repository1, elementId1) => {
    const link = document.getElementById(elementId1);
    link.href = `https://${username1}.github.io/${repository1}`;
    return link.href;
}
linkToProjectPage('Narasimhamurty456', 'form_a_story', 'formastory-page');
linkToProjectPage('Narasimhamurty456', 'piano_keys', 'pianokeys-page');
linkToProjectPage('Narasimhamurty456', 'ball_badminton', 'ballbadminton-page');