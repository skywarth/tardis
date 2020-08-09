var podiumAnimation =  {
    config: {
        rankStep1: [2,1,3],
        rankStep2: [3,1,2],
    },

    init: function() {
        this.allRanking = document.querySelectorAll('.ranking');
        this.buttonStep1 = document.querySelector('.step-1');
        this.buttonStep2 = document.querySelector('.step-2');
        this.bannerTextStep1 = document.querySelector('.banner-text-step1');
        this.bannerTextStep2 = document.querySelector('.banner-text-step2');
        this.bannerTextStep3 = document.querySelector('.banner-text-step3');

        this.buttonStep1.addEventListener('click',this.animationStep1);
        this.buttonStep2.addEventListener('click',this.animationStep2)
        this.updateGuessNumber(this.allRanking);
    },

    animationStep1: function(e) {
        podiumAnimation.animatePodiums([1.7,2.5,1.1]);
        podiumAnimation.animateTrophies([-67,-143,-10]);
        podiumAnimation.showPercentage();
        podiumAnimation.animateValue("value-desktop", 0, 46, 500);
        podiumAnimation.animateValue("value-mobile", 0, 60, 500);
        podiumAnimation.animateValue("value-store", 0, 20, 500);
        this.classList.add('hide');
        podiumAnimation.buttonStep2.classList.add('show');

        //podiumAnimation.checkGuess(podiumAnimation.allRanking,podiumAnimation.config.rankStep1);


        /*setTimeout(function() {
            podiumAnimation.resetPercentage();
            podiumAnimation.resetAnimation();
            podiumAnimation.fadeElements(podiumAnimation.bannerTextStep1,0);

        }, 5000);

        setTimeout(function() {
            podiumAnimation.bannerTextStep2.classList.add('show');
        }, 6000);*/
    },


    animationStep2: function() {
        podiumAnimation.animatePodiums([1.1,2.5,1.7]);
        podiumAnimation.animateTrophies([-10,-143,-67]);
        podiumAnimation.animateValue("value-desktop", 0, 15, 500);
        podiumAnimation.animateValue("value-mobile", 0, 65, 500);
        podiumAnimation.animateValue("value-store", 0, 30, 500);
        podiumAnimation.checkGuess(podiumAnimation.allRanking,podiumAnimation.config.rankStep2);

        setTimeout(function() {
            podiumAnimation.resetPercentage();
            podiumAnimation.resetAnimation();

        }, 5000);

        setTimeout(function() {
            podiumAnimation.animationStep3();
            podiumAnimation.fadeElements(podiumAnimation.bannerTextStep2,0);
        }, 7000);

        setTimeout(function() {
            podiumAnimation.bannerTextStep3.classList.add('show');
        }, 8000);
    },

    animationStep3: function() {
        var trophies = document.querySelectorAll('.trophies:not(#trophy-mobile)');
        var podiums = document.querySelectorAll('.podiums:not(#podium-2)');
        var percentNumber = document.querySelectorAll('.percentage-values');

        trophies.forEach( function(element, index) {
            podiumAnimation.fadeElements(element,0.5)
        });

        podiums.forEach( function(element, index) {
            podiumAnimation.fadeElements(element,0.5)
        });

        percentNumber.forEach( function(element, index) {
            podiumAnimation.fadeElements(element,0)
        });

        this.podiumMobile.reverse();
        this.trophyMobile.reverse();
    },

    resetPercentage: function() {
        podiumAnimation.animateValue("value-desktop", 46, 0, 500);
        podiumAnimation.animateValue("value-mobile", 60, 0, 500);
        podiumAnimation.animateValue("value-store", 20, 0, 500);
    },

    resetAnimation: function() {
        this.podiumDesktop.reverse();
        this.podiumMobile.reverse();
        this.podiumStore.reverse();
        this.trophyDesktop.reverse();
        this.trophyMobile.reverse();
        this.trophyStore.reverse();
    },

    updateGuessNumber: function(allRanking) {
        allRanking.forEach(function(rank){
            rank.addEventListener('click', function(e){
                var innerValue = parseInt(e.target.innerHTML);

                if(innerValue){
                    innerValue = innerValue >= 3 ? 1 : innerValue+=1;
                }else{
                    innerValue = 1;
                }

                e.target.innerHTML = innerValue;
            })
        })
    },

    checkGuess: function(elements,valuesObj) {
        var colorRed = '#ff0000';
        var colorGreen = '#47cf73';

        elements.forEach( function(element,index) {
            if(parseInt(element.innerHTML) !== valuesObj[index]){
                element.setAttribute('fill',colorRed);
            }
            else{
                element.setAttribute('fill',colorGreen);
            }

            element.innerHTML = valuesObj[index];
        });
    },

    animatePodiums: function(scaleValuesArray) {
        var desktopAnimation = scaleUp(scaleValuesArray[0]),
            mobileAnimation = scaleUp(scaleValuesArray[1]),
            storeAnimation = scaleUp(scaleValuesArray[2]);

        this.podiumDesktop = document.querySelector('#podium-1').animate(desktopAnimation.action,desktopAnimation.timing );
        this.podiumMobile = document.querySelector('#podium-2').animate(mobileAnimation.action,mobileAnimation.timing );
        this.podiumStore = document.querySelector('#podium-3').animate(storeAnimation.action,storeAnimation.timing );

        function scaleUp(scaleValue) {
            var animationSteps =  {
                action: [
                    { offset: 0, transform: 'scale(1, 1)' },
                    { offset: 1, transform: 'scale(1,' + scaleValue + ')'  }
                ],
                timing: { duration: 1000, easing: 'ease-in-out', iterations: 1, fill: 'forwards' }
            };

            return animationSteps;
        }
    },

    animateTrophies: function(translateValuesArray) {
        var desktopAnimation = translate(translateValuesArray[0]),
            mobileAnimation = translate(translateValuesArray[1]),
            storeAnimation = translate(translateValuesArray[2]);

        this.trophyDesktop = document.querySelector('#trophy-desktop').animate(desktopAnimation.action,desktopAnimation.timing );
        this.trophyMobile = document.querySelector('#trophy-mobile').animate(mobileAnimation.action,mobileAnimation.timing );
        this.trophyStore = document.querySelector('#trophy-store').animate(storeAnimation.action,storeAnimation.timing );

        function translate(translateValue) {
            var animationSteps =  {
                action: [
                    { offset: 0, transform: 'translateY(0)' },
                    { offset: 1, transform: 'translateY('+ translateValue +'px)'  }
                ],
                timing: { duration: 1000, easing: 'ease-in-out', iterations: 1, fill: 'forwards' }
            };

            return animationSteps;
        }
    },

    fadeElements: function(element,opacityValue) {
        element.animate([
            { offset: 0, opacity:1 },
            { offset: 1, opacity:opacityValue  }
        ], { duration: 1000, easing: 'ease-in-out', iterations: 1, fill: 'forwards' });
    },

    showPercentage: function() {
        var allValues = document.querySelectorAll('.percentage-values');

        allValues.forEach( function(element) {
            element.style['display'] = 'inline-block';
        });
    },

    animateValue: function(id, start, end, duration) {
        // assumes integer values for start and end

        var obj = document.getElementById(id);
        var range = end - start;
        var minTimer = 50;
        var stepTime = Math.abs(Math.floor(duration / range));

        stepTime = Math.max(stepTime, minTimer);

        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            obj.innerHTML = value+'%';
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }
};

podiumAnimation.init();