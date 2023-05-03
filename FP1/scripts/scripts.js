    let elems = document.querySelectorAll('.carousel');

    let options = {
        dist: -100,
        shift: 0,
        padding: 0
    }

    const namesToInfo = {
        "hyein": "Lee Hyein (이혜인; born Apr 21, 2008) is a South Korean singer and the youngest member of NewJeans. She made her debut with NewJeans at the age of 14.",
        "minji": "Kim Min Ji (김민지; born May 7, 2004) is a South Korean idol, the leader, and the oldest member of NewJeans. Minji made her debut with NewJeans at the age of 18.",
        "haerin": "Kang Haerin (강해린; born May 15, 2006) is a South Korean singer. She made her debut with NewJeans at the age of 16.",
        "hanni": "Phạm Ngọc Hân (하니; born Oct 6, 2004), better known as Hanni, is a Vietnamese-Australian singer based in South Korea. She made her debut at the age of 17.",
        "danielle": "Danielle Marsh (모지혜; born Apr 11, 2005) is a Korean-Australian singer based in South Korea. She made her debut with NewJeans at the age of 17.",   
    };

    let instances = M.Carousel.init(elems, options);

    elems = document.querySelectorAll('.collapsible');
    instances = M.Collapsible.init(elems, {});

    function updatePhotocardInfo(id) {
        document.querySelector('#photocardInfo').innerText = namesToInfo[id];;
    }

    function menuOnClick() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("hbrgr").classList.toggle("change");
      }