import '../../styles/mypage/MyPageForumScrap.css';
import '../../styles/mypage/MyPageShare.css';
import '../../styles/mypage/MyPageRecommend.css';
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";
import { useState } from 'react';

export default function MyPageForumScrap() {

  // 검색 분류 선택 드롭다운 
  const [isClicking, setIsClicking] = useState(false);
  const setSearch = () => {
    setIsClicking(!isClicking);
  }

  // 검색 분류조건 설정
  const [isCondition, setIsCondition] = useState('전체');
  const setCondition = (e) => {
    setIsCondition(e.target.textContent);
  }

  return(
    <div className="MyPageForumScrap" 
      onClick={ () => { if (isClicking === true) {setSearch();} } }>

      <div className='container_myForumScrapHeader'>

        <div className='container_myForumScrapSearch'>
          <div className='box_myScrapSearch'>
            <div className='dropbox_myScrapSearch'>
              <div className='droplist_nowSearch' onClick={setSearch}>{isCondition}</div>
              <ul className={isClicking ? 'droplist_myScrapSearch_clicked' : 'droplist_myScrapSearch'}>
                <li className='drops_myScrapSearch' onClick={setCondition}>전체</li>
                <li className='drops_myScrapSearch' onClick={setCondition}>나눔</li>
                <li className='drops_myScrapSearch' onClick={setCondition}>추천</li>
              </ul>
            </div>
            <input type='text' name='forumscrapSearch' className='input_myForumScrapSearch' />
            <button className='btn_myForumScrapSearch'>검색</button>
          </div>
        </div>
      </div>
      
      <div className='container_myforumScrapArea'>
        {/* 글 종류 나눔/경로추천에 따라 리턴 다르게 */}



        <div className="container_mypageShareWriting">
          {/* 사진 */}
          {/* <div className="container_myShareLeft"> */}
            {/* <img src={temptemp}  className='temptemp'/> */}
          {/* </div> */}

          <div className="container_myShareRight">
            <div className='container_myShareWhole'>
              <div className='container_myShareTop'>
                <div className='container_myShareState_ongoing'>진행중</div>
                <div className='container_myShareViews'>조회수 1004</div>
              </div>
              <div className='container_myShareTitle'>
                무료 나눔글 제목
              </div>
              <div className='container_myShareBottom'>
                <div className='container_myShareContent'>
                  본문
                </div>
                {/* 스크랩에서만 글작성자 */}
                <div className='container_myScrapUser'>
                  <div className='box_userNickname'>닉네임닉네임</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container_mypageShareWriting">
          {/* 사진 */}
          <div className="container_myShareLeft">
            {/* <img src={temptemp}  className='temptemp'/> */}
          </div>

          <div className="container_myShareRight">
            <div className='container_myShareWhole'>
              <div className='container_myShareTop'>
                <div className='container_myShareState_ongoing'>진행중</div>
                <div className='container_myShareViews'>조회수 1004</div>
              </div>
              <div className='container_myShareTitle'>
                무료 나눔글 제목
              </div>
              <div className='container_myShareBottom'>
                <div className='container_myShareContent'>
                  본문
                </div>
                {/* 스크랩에서만 글작성자 */}
                <div className='container_myScrapUser'>
                  <div className='box_userNickname'>닉네임닉네임</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container_mypageRecomWriting">
          {/* 지도 */}
          <div className="container_myRecomLeft">
            {/* <img src={temptemp}  className='temptemp'/> */}
          </div>

          <div className="container_myRecomRight">
            <div className='container_myRecomWhole'>
              <div className='container_myRecomTop'>
                <div className='container_myRecomTitle'>
                  경로 추천글 제목
                </div>
                <div className='container_myViews'>조회수 1004</div>
              </div>
              <div className='container_myRecomBottom'>
                <div className='container_myRecomContent'>
                  본문
                </div>
                   {/* 스크랩에서만 글작성자 */}
                   <div className='container_myScrapUser'>
                  <div className='box_userNickname'>닉네임닉네임</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       



      </div>

      <div className='container_myBottom'>
        <div className='box_contensPlus'>
            더보기  
        </div>
      </div>

    </div>
  );
}