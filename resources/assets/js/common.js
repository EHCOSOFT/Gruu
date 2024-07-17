$(document).ready(function () {
    $("#header").append(Header());
    $("#footer").append(Footer());
    function Header() {
        return `
        <div class="container">
                <a href="main.html" class="header-logo">
                    <img src="img/logo.png" alt="Gruu">
                </a>
                <nav class="navbar">
                    <ul>
                        <li><a href="javascript:void(0);">프로그램</a></li>
                        <li><a href="javascript:void(0);">기업 데이터</a></li>
                        <li><a href="javascript:void(0);">설문 관리</a></li>
                        <li><a href="javascript:void(0);">업무 노트</a></li>
                        <li><a href="javascript:void(0);">인사이트</a></li>
                    </ul>
                </nav>
                <div class="right">
                    <div class="alarm active">
                        <i class="ico i-alarm"></i>
                    </div>
                    <div class="user">
                        <div class="user-profile">
                            <div class="user-img"></div>
                            <p><span>김담당</span>님</p>
                        </div>
                        <ul class="user-menu-area">
                            <li><a href="#"><i class="ico i-profile"></i>기업 프로필</a></li>
                            <li class="active"><a href="#"><i class="ico i-set"></i>계정 관리</a></li>
                            <hr>
                            <li><a href="#"><i class="ico i-about"></i>그루 소개페이지</a></li>
                            <hr>
                            <li><a href="#"><i class="ico i-logout"></i>로그아웃</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    };

    function Footer() {
        return `
         <div class="footer-top">
                <div class="container">
                    <h1>
                        <img src="img/logo.png" alt="Gruu">
                    </h1>
                    <div class="footer-info">
                        <h6>(주)기업성장데이터랩</h6>
                        <p><span>사업자등록번호: 185-87-02542</span><span>대표: 김성우</span><span>개인정보 보호책임자: 김성우</span></p>
                        <p>본사: 제주특별자치도 제주시 동문로9길 13-1, W360 2층 베타 (63278)</p>
                        <p>연구소: 서울특별시 중구 퇴계로27길 49, 센트럴에쓰 6층 605호 (04555)</p>
                        <p>전화번호: 064-803-8988</p>
                        <ul>
                            <li><a href="javascript:void(0);">서비스 이용약관</a></li>
                            <li>|</li>
                            <li><a href="javascript:void(0);"><strong>개인정보 처리방침</strong></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <p>© 2024. (주)기업성장데이터랩 All rights reserved.</p>
                    <ul>
                        <li>
                            <a href="javascript:void(0);"><i class="ico i-facebook"></i></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><i class="ico i-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><i class="ico i-blog"></i></a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"><i class="ico i-email"></i></a>
                        </li>
                    </ul>
                </div>
            </div>`
    }

    // nav event
    $('.navbar ul li a').click(function () {
        $('.navbar ul li').removeClass('active');
        $(this).parent().addClass('active');
    });

    // tab
    $('.tab').click(function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
    });

    $('.tab-right').on('click', function () {
        var scrollAmount = 100; // 스크롤할 양을 조정할 수 있음
        $('#tab-scroll').animate({
            scrollLeft: '+=' + scrollAmount
        }, 300); // 300ms 동안 스크롤
    });

    let isDown = false;
    let startX;
    let scrollLeft;

    $('#tab-scroll').on('mousedown', function (e) {
        isDown = true;
        startX = e.pageX - $(this).offset().left;
        scrollLeft = $(this).scrollLeft();
    });

    $('#tab-scroll').on('mouseleave', function () {
        isDown = false;
    });

    $('#tab-scroll').on('mouseup', function () {
        isDown = false;
    });

    $('#tab-scroll').on('mousemove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - $(this).offset().left;
        const walk = (x - startX) * 2; // 스크롤 속도 조정
        $(this).scrollLeft(scrollLeft - walk);
    });

    // tab-scroll
    $('.tab-right').on('click', function () {
        var scrollAmount = 100; // 스크롤할 양을 조정할 수 있음
        $('#tab-scroll').animate({
            scrollLeft: '+=' + scrollAmount
        }, 300); // 300ms 동안 스크롤
    });

    // dropdown
    $(".dropdown-button").click(function (e) {
        if ($(this).hasClass("disabled")) {
            return;
        }

        var target = $(this).data("target");
        $("#" + target).toggle();
        $(this).toggleClass("active");

        e.stopPropagation();
    });

    $(document).click(function () {
        $(".dropdown-list").hide();
        $(".dropdown-button").removeClass("active");
    });

    $('.dropdown-list').click(function (e) {
        e.stopPropagation();
    });

    // modal
    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        // $("body").css("overflow", "hidden");
        // 스크롤 이벤트 방지
        // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
    });

    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .modal-wrap").click(function () {
        $(".modal-wrap").removeClass("active");
        // $("body").css("overflow", "auto");
        window.removeEventListener("wheel", removeDefaultEvent);
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    // 참가기업편집 event
    $('#chkAll').on('change', function () {
        $('.all-company-list input[type="checkbox"]').prop('checked', this.checked).trigger('change');
    });

    $('.all-company-list input[type="checkbox"]').on('change', function () {
        var $li = $(this).closest('li');
        if (this.checked) {
            $li.addClass('active');
            var companyName = $li.find('h4').text();
            $('.selected-group').append('<p><span>' + companyName + '</span><button type="button" class="btn-del"></button></p>');
        } else {
            $li.removeClass('active');
            var companyName = $li.find('h4').text();
            $('.selected-group p').filter(function () {
                return $(this).find('span').text() === companyName;
            }).remove();
        }
        updateSelectedCount();
    });

    $('.btn-all-del').on('click', function () {
        $('.selected-group').empty();
        $('.all-company-list input[type="checkbox"]').prop('checked', false).closest('li').removeClass('active');
        updateSelectedCount();
    });

    $('.selected-area').on('click', '.btn-del', function () {
        $(this).closest('p').remove();
        updateSelectedCount();
    });

    function updateSelectedCount() {
        var count = $('.selected-group p').length;
        $('.selected-company .top p span').text(count);
    }

    // 정기설문지 event
    // 드롭다운에서 선택된 값을 설정
    $('.dropdown-list a').on('click', function (e) {
        e.preventDefault();
        var value = $(this).data('value');
        $(this).closest('.dropdown-list-wrap').find('.placeholder').text(value);
    });

    // "추가" 버튼 클릭 이벤트 처리
    $('.btn-invest-add').on('click', function () {
        var category = $('.dropdown-button .placeholder').text();
        var date = $('.datepicker').val();
        var company = $('.input-group input[placeholder="투자처"]').val();
        var value = $('.input-group input[placeholder="밸류 금액"]').val();
        var amount = $('.input-group input[placeholder="투자유치금액"]').val();

        console.log(date);
        // 빈 값 체크
        // if (category === '구분' || !date || !company || !value || !amount) {
        //     alert('모든 필드를 입력해주세요.');
        //     return;
        // }

        // 새로운 행 추가
        var newRow = `<tr>
                        <td><strong>${category}</strong></td>
                        <td>${date}</td>
                        <td><strong>${company}</strong></td>
                        <td>${value}</td>
                        <td><strong>${amount}</strong></td>
                        <td><button type="button" class="btn-item-del"><i class="ico i-circle-close"></i></button></td>
                      </tr>`;
        $('#investment tbody').append(newRow);

        // 입력 필드 초기화
        $('.dropdown-button .placeholder').text('구분');
        $('.datepicker').val('');
        $('.input-group input').val('');
    });

    $('.btn-regi-add').on('click', function () {
        var date = $('.registration-date').val();
        var name = $('.registration-name').val();

        // 빈 값 체크
        // if (!date || !name) {
        //     alert('모든 필드를 입력해주세요.');
        //     return;
        // }

        // 새로운 행 추가
        var newRow = `<tr>
                        <td>${date}</td>
                        <td>${name}</td>
                      </tr>`;
        $('#registration tbody').append(newRow);

        // 입력 필드 초기화
        $('.registration-date').val('');
        $('.registration-name').val('');

        // "no-content" 행 제거
        $('.no-content-row').remove();
    });

    // 삭제 버튼 클릭 이벤트 처리 (이벤트 위임 사용)
    $(document).on('click', '.btn-item-del', function () {
        $(this).closest('tr').remove();
    });

    // 정기설문지
    // 드롭다운 버튼 클릭 이벤트 처리
    $('.dropdown-button').on('click', function () {
        var $dropdown = $(this).next('.filter-list-item');
        if ($dropdown.is(':visible')) {
            $dropdown.addClass('hidden');
            $(this).removeClass('active');
        } else {
            $dropdown.removeClass('hidden');
            $(this).addClass('active');
        }
    });

    // 드롭다운 외부 클릭 시 드롭다운 숨기기
    // $(document).on('click', function (event) {
    //     if (!$(event.target).closest('.filter-list').length) {
    //         $('.filter-list-item').addClass('hidden');
    //         $('.dropdown-button').removeClass('active');
    //     }
    // });

    // 드롭다운 내부 클릭 이벤트 전파 방지
    $('.filter-list').on('click', function (event) {
        event.stopPropagation();
    });

    // 초기화 버튼 클릭 이벤트 처리
    $('.btn-all-reset').on('click', function () {
        console.log('qwe');
        $('.filter-list-item input[type="checkbox"]').prop('checked', false);
    });

    $('.btn-interest').click(function () {
        $(this).toggleClass("active");
    })

    $('.btn-bookmark').click(function () {
        $(this).toggleClass("active");
    })

    // accordion
    $('.accordion-header').click(function () {
        $('.accordion-content').not($(this).next()).slideUp();
        $('.accordion-header').not($(this)).removeClass('active');
        $(this).next('.accordion-content').slideToggle();
        $(this).toggleClass('active');
    });

    //datepicker
    // https://mobiscroll.com/docs/jquery/datepicker/api#opt-themeVariant
    $('.datepicker ')
        .mobiscroll()
        .datepicker({
            controls: ['calendar'],
            display: 'anchored',
        });

    // textarea
    function autoResizeTextarea() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }

    $('#autoResizeTextarea').each(autoResizeTextarea).on('input', autoResizeTextarea);
    $('#autoResizeTextarea').trigger('input');

    // 정기설문지
    $('.input-none').change(function () {
        if ($(this).is(':checked')) {
            $(this).closest('.check-group').prev('.input-area').find('input').prop('disabled', true).val('').attr('placeholder', '');
        } else {
            $(this).closest('.check-group').prev('.input-area').find('input').prop('disabled', false).attr('placeholder', '숫자를 적어주세요.');
        }
    });

    // $('.input-none').change(function () {
    //     if ($(this).is(':checked')) {
    //         $(this).closest('.regular-item-op').prev('.regular-item-add').find('input').prop('disabled', true);
    //         $(this).closest('.regular-item-op').prev('.regular-item-add').find('.dropdown-button').addClass('disabled')
    //             ;
    //     } else {
    //         $(this).closest('.regular-item-op').prev('.regular-item-add').find('input').prop('disabled', false);
    //         $(this).closest('.regular-item-op').prev('.regular-item-add').find('.dropdown-button').removeClass('disabled')
    //     }
    // });

    $('.input-none').change(function () {
        var $tableBody = $(this).closest('.regular-area').find('#investment tbody');

        if ($(this).is(':checked')) {
            // 테이블 내용 지우기
            $tableBody.empty();

            // 새 행 추가
            $tableBody.append(`
                <tr>
                    <td colspan="6" class="no-content-row">
                        <div class="no-content">
                            <p>아래 입력창에 내용을 적고 추가 버튼을 누르세요</p>
                        </div>
                    </td>
                </tr>
            `);

            $(this).closest('.regular-item-op').prev('.regular-item-add').find('input').prop('disabled', true).val('');
            $(this).closest('.regular-item-op').prev('.regular-item-add').find('.dropdown-button').addClass('disabled');
        } else {
            $(this).closest('.regular-item-op').prev('.regular-item-add').find('input').prop('disabled', false);
            $(this).closest('.regular-item-op').prev('.regular-item-add').find('.dropdown-button').removeClass('disabled');
        }
    });

    // input number 콤마(,)처리
    function addCommas(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    function removeCommas(nStr) {
        return nStr.replace(/,/g, '');
    }

    $('.input-number-display').on('input', function () {
        var value = $(this).val();
        var numericValue = removeCommas(value);

        if (!isNaN(numericValue) && numericValue.length > 0) {
            $(this).val(addCommas(numericValue));
            $('.input-number').val(numericValue);
        } else {
            $(this).val('');
            $('.input-number').val('');
        }
    });

    // header user profile
    $('.user-profile').click(function () {
        $(this).next('.user-menu-area').toggleClass('active');
    });

    // $('.user').mouseleave(function() {
    //     $('.user-menu-area').removeClass('active');
    // });
});

mobiscroll.setOptions({
    locale: mobiscroll.localeKo, // 언어
    theme: 'ios',                // 테마
    themeVariant: 'light',
    dateFormat: 'YYYY-MM-DD',
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});

