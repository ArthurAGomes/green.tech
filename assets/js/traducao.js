    document.getElementById('traduzir').addEventListener('click', function() {
        traduzirPagina();
    });

    function traduzirPagina() {
        const traducoes = {
            "Hello! We are in the third year of high school, and we are producing a project about the environment and sustainability in order to raise awareness about taking care of our planet since it is going through a moment of fragility and we are ignoring this factor.": "Olá! Estamos no terceiro ano do ensino médio e estamos produzindo um projeto sobre o meio ambiente e sustentabilidade para aumentar a conscientização sobre cuidar do nosso planeta, que está passando por um momento de fragilidade e estamos ignorando esse fator.",
            "The planet is facing extreme warming, with global temperatures reaching alarming levels. These changes in climate and environment directly impact all living beings, endangering biodiversity and our quality of life.": "O planeta está enfrentando um aquecimento extremo, com temperaturas globais alcançando níveis alarmantes. Essas mudanças no clima e no meio ambiente impactam diretamente todos os seres vivos, colocando em risco a biodiversidade e nossa qualidade de vida.",
            "Global warming poses a direct threat to human health and safety. Intense heat waves, water shortages, and increased natural disasters bring immediate dangers, with growing impact over the coming decades.": "O aquecimento global representa uma ameaça direta à saúde e segurança humanas. O aumento de ondas de calor, escassez de água e desastres naturais crescentes trazem perigos imediatos, com impactos crescentes nas próximas décadas.",
            "We are facing a potential future without humans. Extinction is a real threat if actions to reduce carbon emissions and preserve ecosystems are not intensified. We must act before it’s too late.": "Estamos enfrentando um futuro potencial sem humanos. A extinção é uma ameaça real se as ações para reduzir as emissões de carbono e preservar os ecossistemas não forem intensificadas. Precisamos agir antes que seja tarde demais.",
            "Combating this environmental catastrophe requires commitment. Transitioning to renewable energy, reducing carbon emissions, and encouraging sustainability are some urgent actions to protect our future.": "Combater esta catástrofe ambiental requer compromisso. A transição para energias renováveis, a redução das emissões de carbono e o incentivo à sustentabilidade são algumas ações urgentes para proteger nosso futuro.",
            "In November, at Colégio Novo Ideal, during the Sebrae fair, you will understand the catastrophic factors that are happening around the world and you will also learn how to prevent and preserve our planet. Join us in the fight against global turmoil and to preserve our environment!": "Em novembro, no Colégio Novo Ideal, durante a feira Sebrae, você entenderá os fatores catastróficos que estão acontecendo ao redor do mundo e também aprenderá como prevenir e preservar nosso planeta. Junte-se a nós na luta contra a turbulência global e para preservar nosso meio ambiente!"
        };

        // Substituir texto diretamente nos elementos específicos
        document.querySelectorAll('p, h1, h2, h3').forEach(element => {
            for (const [original, traducao] of Object.entries(traducoes)) {
                if (element.textContent.includes(original)) {
                    element.textContent = element.textContent.replace(original, traducao);
                }
            }
        });
    }

