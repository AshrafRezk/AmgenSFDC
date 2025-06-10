const styles = [
    {
        name: 'Authoritative',
        summary: 'High expectations with warmth and respect.',
        good: 80,
        bad: 20,
        grows: ['responsibility', 'confidence', 'empathy'],
        neglects: ['spontaneity']
    },
    {
        name: 'Authoritarian',
        summary: 'Strict rules and obedience focus.',
        good: 60,
        bad: 40,
        grows: ['discipline', 'respect for rules'],
        neglects: ['creativity', 'independence']
    },
    {
        name: 'Permissive',
        summary: 'Lenient with few demands.',
        good: 70,
        bad: 50,
        grows: ['self-expression', 'creativity'],
        neglects: ['self-control', 'accountability']
    },
    {
        name: 'Uninvolved',
        summary: 'Low responsiveness and guidance.',
        good: 30,
        bad: 70,
        grows: ['self-reliance'],
        neglects: ['emotional connection', 'guidance']
    },
    {
        name: 'Positive/Gentle',
        summary: 'Empathy and natural consequences.',
        good: 85,
        bad: 25,
        grows: ['cooperation', 'problem-solving'],
        neglects: ['respect for authority']
    },
    {
        name: 'Helicopter',
        summary: 'Overprotective and involved.',
        good: 60,
        bad: 40,
        grows: ['security', 'achievement'],
        neglects: ['independence', 'risk-taking']
    },
    {
        name: 'Free-Range',
        summary: 'Encourages independence within boundaries.',
        good: 75,
        bad: 30,
        grows: ['confidence', 'resilience'],
        neglects: ['structure', 'safety concerns']
    },
    {
        name: 'Tiger',
        summary: 'Achievement-focused discipline.',
        good: 70,
        bad: 50,
        grows: ['work ethic', 'perseverance'],
        neglects: ['creativity', 'emotional regulation']
    }
];

const methods = [
    {
        name: 'Montessori',
        summary: 'Self-directed activity in prepared environments.',
        good: 80,
        bad: 30,
        grows: ['independence', 'concentration', 'self-motivation'],
        neglects: ['structured group work']
    },
    {
        name: 'Waldorf',
        summary: 'Arts-based learning with daily rhythm.',
        good: 70,
        bad: 40,
        grows: ['creativity', 'imagination'],
        neglects: ['early academics', 'technology']
    },
    {
        name: 'Reggio Emilia',
        summary: 'Project-based child-led discovery.',
        good: 75,
        bad: 35,
        grows: ['collaboration', 'critical thinking'],
        neglects: ['standardized assessment']
    },
    {
        name: 'Charlotte Mason',
        summary: 'Short lessons using living books.',
        good: 70,
        bad: 30,
        grows: ['love of literature', 'habit formation'],
        neglects: ['modern technology']
    },
    {
        name: 'Unschooling',
        summary: 'Learning from life experiences.',
        good: 65,
        bad: 45,
        grows: ['curiosity', 'independence'],
        neglects: ['structure', 'external accountability']
    },
    {
        name: 'Forest School',
        summary: 'Outdoor nature-rich exploration.',
        good: 80,
        bad: 30,
        grows: ['resilience', 'environmental awareness'],
        neglects: ['indoor academics']
    },
    {
        name: 'Classical Education',
        summary: 'Grammar, Logic, Rhetoric.',
        good: 70,
        bad: 40,
        grows: ['logic', 'memorization'],
        neglects: ['creativity', 'flexibility']
    },
    {
        name: 'RIE',
        summary: 'Respectful infant caregiving.',
        good: 85,
        bad: 20,
        grows: ['autonomy', 'secure attachment'],
        neglects: ['structured academics']
    },
    {
        name: 'Pikler',
        summary: 'Independent motor development.',
        good: 80,
        bad: 25,
        grows: ['confidence', 'motor skills'],
        neglects: ['group learning']
    },
    {
        name: 'Faith-Based',
        summary: 'Guided by scripture and moral character.',
        good: 85,
        bad: 30,
        grows: ['moral development', 'community'],
        neglects: ['secular perspectives']
    }
];

function getResources(name) {
    return {
        videos: [
            `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' parenting method')}`
        ],
        books: [
            `https://www.goodreads.com/search?q=${encodeURIComponent(name + ' parenting')}`
        ]
    };
}

function updateChart(item) {
    const chartContainer = document.getElementById('statsChart');
    if (!chartContainer) return;
    console.log('Updating chart for', item.name);
    // Implementation would update chart elements based on item data
}

function showModal(item) {
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSummary = document.getElementById('modalSummary');
    const modalTraits = document.getElementById('modalTraits');
    const modalVideos = document.getElementById('modalVideos');
    const modalBooks = document.getElementById('modalBooks');

    modalTitle.textContent = item.name;
    modalSummary.textContent = item.summary;

    modalTraits.innerHTML = '';
    const growTitle = document.createElement('h4');
    growTitle.textContent = 'Fosters';
    const growList = document.createElement('ul');
    item.grows.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        growList.appendChild(li);
    });
    const neglectTitle = document.createElement('h4');
    neglectTitle.textContent = 'May Neglect';
    const neglectList = document.createElement('ul');
    item.neglects.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        neglectList.appendChild(li);
    });
    modalTraits.appendChild(growTitle);
    modalTraits.appendChild(growList);
    modalTraits.appendChild(neglectTitle);
    modalTraits.appendChild(neglectList);

    const resources = getResources(item.name);
    modalVideos.innerHTML = '';
    resources.videos.forEach(url => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.textContent = `YouTube search for ${item.name}`;
        li.appendChild(a);
        modalVideos.appendChild(li);
    });
    modalBooks.innerHTML = '';
    resources.books.forEach(url => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.textContent = `Books about ${item.name}`;
        li.appendChild(a);
        modalBooks.appendChild(li);
    });

    modal.classList.add('active');
}

document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('infoModal').classList.remove('active');
});

document.getElementById('infoModal').addEventListener('click', e => {
    if (e.target.id === 'infoModal') {
        e.target.classList.remove('active');
    }
});


function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    const title = document.createElement('h3');
    title.textContent = item.name;
    const summary = document.createElement('p');
    summary.textContent = item.summary;
    const goodWrap = document.createElement('div');
    goodWrap.className = 'meter-container';
    const goodLabel = document.createElement('span');
    goodLabel.className = 'meter-label';
    goodLabel.textContent = 'Strengths';
    const goodMeter = document.createElement('div');
    goodMeter.className = 'meter';
    const goodBar = document.createElement('div');
    goodBar.style.width = item.good + '%';
    goodMeter.appendChild(goodBar);
    goodWrap.appendChild(goodLabel);
    goodWrap.appendChild(goodMeter);

    const badWrap = document.createElement('div');
    badWrap.className = 'meter-container';
    const badLabel = document.createElement('span');
    badLabel.className = 'meter-label';
    badLabel.textContent = 'Blind Spots';
    const badMeter = document.createElement('div');
    badMeter.className = 'meter';
    const badBar = document.createElement('div');
    badBar.style.width = item.bad + '%';
    badBar.style.background = '#ff9e9e';
    badMeter.appendChild(badBar);
    badWrap.appendChild(badLabel);
    badWrap.appendChild(badMeter);

    const details = document.createElement('div');
    details.className = 'details';
    const growTitle = document.createElement('h4');
    growTitle.textContent = 'Fosters';
    const growList = document.createElement('ul');
    item.grows.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        growList.appendChild(li);
    });
    const neglectTitle = document.createElement('h4');
    neglectTitle.textContent = 'May Neglect';
    const neglectList = document.createElement('ul');
    item.neglects.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        neglectList.appendChild(li);
    });
    details.appendChild(growTitle);
    details.appendChild(growList);
    details.appendChild(neglectTitle);
    details.appendChild(neglectList);

    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(goodWrap);
    card.appendChild(badWrap);
    card.appendChild(details);

    card.addEventListener('click', () => {
        if (typeof updateChart === 'function') {
            updateChart(item);
        }
        details.classList.toggle('show');
        if (document.getElementById('infoModal')) {
            showModal(item);
        }
    });

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const styleContainer = document.querySelector('#styles .cards');
    const methodContainer = document.querySelector('#methods .cards');
    styles.forEach(item => styleContainer.appendChild(createCard(item)));
    methods.forEach(item => methodContainer.appendChild(createCard(item)));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});
