function Score(props) {
    const { data } = props;
    console.log(data.scores);

    return (
        <ul>Scores: {data.scores.map(score => 
        <li>{score.score} - ({score.date})</li>)}</ul>
    )
}

export default Score;