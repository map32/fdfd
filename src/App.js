import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from 'react'

function App() {
	const keys = {
		encodingKey:'r%2FwmDREwlhFgfXkUr7K3f54iauvk1m3tfWgIlf4jBJKtLAghzgIR1YfVOySrZnycqen1ZTMwKS7prUKGkmxreQ%3D%3D',
		decodingKey:'r/wmDREwlhFgfXkUr7K3f54iauvk1m3tfWgIlf4jBJKtLAghzgIR1YfVOySrZnycqen1ZTMwKS7prUKGkmxreQ==',
	}
	const convert = {
		pageNo:'페이지 번호',
		numOfRows:'한 페이지 결과 수',
		type:'응답메시지 타입(JSON/XML)',
		responseTime:'응답시간',
		resultCode:'결과코드',
		resultMsg:'결과메시지',
		totCnt:'전체 결과 수',
		foodCd:'대표식품코드',
		foodNm:'대표식품명',
		foodKindNm:'식품유형',
		largeClsNm:'식품분류(대)',
		middleClsNm:'식품분류(중)',
		smallClsNm:'식품분류(소)',
		tradFoodCnt:'대표식품 내 전통식품 수',
		tradFoodCd:'전통식품코드',
		tradFoodNm:'전통식품명',
		tradFoodNmOri:'전통식품명(원문)',
		tradFoodNmKr:'전통식품명(독음)',
		tradFoodNmDiff:'전통식품명(이명)',
		tradFoodNmEn:'전통식품명(영어-음가)',
		tradFoodNmEnTrans:'전통식품명(영어-번역)',
		docNm:'출전문헌',
		transTxt:'번역문',
		dbYear:'구축년도',
		oriTxt:'원문',
		recipe:'조리법(가공기술)',
		cookingTool:'조리기기 및 도구',
		ingredientSeq:'순서',
		ingredientNm:'식재료명',
		ingredientNmOri:'식재료명 원문',
		ingredientNmKr:'식재료명 독음',
		ingredientNmDiff:'식재료명 이명',
		ingredientNmEn:'식재료명 영문',
		mainMaterialNm:'주재료 여부',
		cnt:'수량',
		unit:'단위',
		etc:'기타',
		diseaseMasterSeq:'병증 시퀀스',
		diseaseNmOri:'병증(원문)',
		diseaseNmKr:'병증(독음)',
		diseaseNmDiff:'병증(이명)',
		diseaseNmDiffKr:'병증(이명독음)',
		diseaseModern:'관련 현대병증',
		docNm:'출전문헌',
		docNmKr:'출전문헌 독음',
		year:'간행년도',
		docNmBookTitle:'편명',
		diseaseContent:'병증내용',
		prescriptionNmOri:'처방(원문)',
		prescriptionNmKr:'처방(독음)',
		prescriptionNmDiff:'처방(이명)',
		prescriptionNmModern:'처방(현대어)',
		cureContent:'주치내용',
		prescriptionEtc:'처방 기타',
		seq:'순서',
		mappingTypeNm:'관련식품구분',
		prepareMedicine:'조제법',
		takeMedicine:'복용법',
		drugsInfoSeq:'구성약재 시퀀스',
		drugsNmOri:'약재 원문',
		drugsNmKr:'약재 독음',
		drugsNmDiff:'약재 이명',
		drugsNmModern:'약재 현대어',
		process:'약재용법',
		query:'키워드',
		ctrlNo:'논문코드',
		ttl:'제목',
		jrlTtl:'논문학술지명',
		keywrdMed:'논문키워드',
		pubDt:'논문발행일',
		pg:'페이지',
		preCd:'처방코드',
		preNm:'처방명',
		preMed:'구성약재',
		mui:'조제용법',
		muiBool:'조제용법 검색조건',
		pdis:'주치병증',
		pdisBool:'주치병증 검색조건',
		pipc:'IPC분류코드',
		pipcBool:'IPC 검색조건',
		pmed:'구성약재',
		pmedBool:'구성약재 검색조건',
		pn:'처방명',
		pnBool:'처방명 검색조건',
		psrc:'출전',
		psrcBool:'출전 검색조건',
		ctrd:'금기사항',
		ctrdBool:'금기사항 검색조건',
		freeQuery:'검색어',
		preSrcBook:'출전',
		preSrcBookDt:'출전발행일',
		preDisCd:'주치병증코드',
		preIpcCd:'IPC분류코드',
		makeUseInfo:'조제용법',
		preCtrd:'금기사항',
		preKwd:'처방키워드',
		preSrcBookCd:'출전발행일코드',
		preMedCd:'구성약재코드',
		preDis:'주치병증',
		mdis:'주치병증',
		Prc:'수치법',
		Ma:'이명',
		Tst:'성미',
		Ep:'작용부위',
		mct:'금기사항',
		mpre:'포함처방',
		Che:'화합물명',
		mipc:'관련ipc코드',
		mkwd:'약재키워드',
		Mn:'약재명',
		Sc:'학명',
		pmn:'일반명',
		Lmn:'라틴명',
		Fn:'과명',
		Mp:'약용부위',
		Mic:'약재성상',
		meff:'효능',
		mdisBool:'주치병증 검색조건',
		PrcBool:'수치법 검색조건',
		MaBool:'이명 검색조건',
		TstBool:'성미 검색조건',
		EpBool:'작용부위 검색조건',
		mctBool:'금기사항 검색조건',
		mpreBool:'포함처방 검색조건',
		CheBool:'화합물명 검색조건',
		mipcBool:'관련ipc코드 검색조건',
		mkwdBool:'약재키워드 검색조건',
		MnBool:'약재명 검색조건',
		ScBool:'학명 검색조건',
		pmnBool:'일반명 검색조건',
		LmnBool:'라틴명 검색조건',
		FnBool:'과명 검색조건',
		MpBool:'약용부위 검색조건',
		MicBool:'약재성상 검색조건',
		meffBool:'효능 검색조건',
		medCd:'약재코드',
		medNm:'약재명',
		scinNm:'학명',
		pplrNm:'일반명',
		ltnNm:'라틴명',
		famNm:'과명',
		medDis:'주치병증',
		medDisCd:'주치병증코드',
		medDisCdBook:'주치병증코드 출전',
		medPre:'포함처방',
		medPreCd:'포함처방코드',
		medEft:'효능',
		medEftCd:'효능코드',
		medEftSrcBook:'효능 출전',
		medAlisNm:'이명',
		medChem:'관련화합물',
		medChemCd:'관련화합물코드',
		medIpcCd:'IPC분류코드',
		useTgt:'약용부위',
		st:'검색조건(0:한방,1:양방,2:양방영문)',
		sw:'검색어',
		disNm:'한방명칭',
		westdisNm:'양방명칭',
		westdisNmEng:'양방영문',
		dnm:'병증명',
		ddfn:'정의',
		asnm:'이명',
		ewd:'양방병증명',
		dmed:'관련약재',
		dpre:'관련처방',
		dipc:'관련ipc코드',
		dkwd:'병증키워드',
		dnmBool:'병증명 검색조건',
		ddfnBool:'정의 검색조건',
		asnmBool:'이명 검색조건',
		ewdBool:'양방병증명 검색조건',
		dmedBool:'관련약재 검색조건',
		dpreBool:'관련처방 검색조건',
		dipcBool:'관련ipc코드 검색조건',
		dkwdBool:'병증키워드 검색조건',
		disCd:'병증코드',
		disNm:'병증명',
		disDfn:'정의',
		disAlisNm:'이명',
		diskwd:'병증키워드',
		westDisCd:'양방병증코드',
		westDis:'양방병증',
		disIpcCd:'ipc코드',
		disMedCd:'관련약재코드',
		disMed:'관련약재',
		disPreCd:'관련처방코드',
		disPre:'관련처방',
		Category:'음식보감분류코드',
		category:'음식보감분류코드',
		sno:'고유값',
		name:'이름',
		content:'설명',
		SNO:'고유값',
		content1:'내용1',
		gdrug:'영양성분',
		drug:'약성',
		mingan:'민간요법',
		
	}
	const menu = {
		'전통식품정보 서비스': {
			queries:{
				'/TradFoodInfoService/getFoodCateogryList':{
					title:'대표식품 목록 과 분류',
					sub:'대표식품명, 대표식품코드, 식품분류를 제공한다.',
					parameters:['type','pageNo','numOfRows']
				},
				'/TradFoodInfoService/getTradFoodList':{
					title:'대표식품별 전통식품명 분류',
					sub:'대표식품코드, 전통식품명, 전통식품코드, 식품명(원문), 식품명(독음), 식품명(이명), 식품명(영어), 출전문헌정보를 제공한다.',
					parameters:['type','pageNo','numOfRows','foodCd']
				},
				'/TradFoodInfoService/getTradFoodInfo':{
					title:'전통식품 상세정보',
					sub:'전통식품코드, 출전문헌내용 원문, 출전문헌내용 번역문, 조리법, 식재료명,식재료 수량 및 단위를 제공한다.',
					parameters:['type','tradFoodCd']
				},
				'/TradFoodInfoService/getFoodDiseaseList':{
					title:'대표식품별 건강기능(병증처방) 정보',
					sub:'대표식품코드, 병증명,병증내용,병증 출전문헌정보, 처방명,주치내용,처방 출전문헌정보, 조제법,복용법,약재명,약재 수량 및 단위, 약재용법을 제공한다.',
					parameters:['type','tradFoodCd']
				},
				'/TradFoodInfoService/getFoodHealthScholarList':{
					title:'대표식품별 건강기능(학술) 정보',
					sub:'발행기관(제공기관/제공서비스),문헌명(학술지명),권/호,기사명(논문명),저자명,페이지정보,관련논문내용을 제공한다.',
					parameters:['type','pageNo','numOfRows','foodCd']
				},
				'/TradFoodInfoService/getFoodHealthOriMediList':{
					title:'대표식품별 건강기능(한의문헌) 정보',
					sub:'발행기관(제공기관/제공서비스),문헌명(학술지명),권/호,기사명(논문명),저자명,페이지정보,관련논문내용을 제공한다.',
					parameters:['type','pageNo','numOfRows','foodCd']
				},
				'/TradFoodInfoService/getFoodAreaList':{
					title:'대표식품별 지역 정보',
					sub:'발행기관(제공기관/제공서비스),문헌명(학술지명),권/호,기사명(논문명),저자명,페이지정보,관련논문내용을 제공한다.',
					parameters:['type','pageNo','numOfRows','foodCd']
				},
				'/TradFoodInfoService/getFoodHistoryList':{
					title:'대표식품별 역사 정보',
					sub:'발행기관(제공기관/제공서비스),문헌명(학술지명),권/호,기사명(논문명),저자명,페이지정보,관련논문내용을 제공한다.',
					parameters:['type','pageNo','numOfRows','foodCd']
				},
				'/TradFoodInfoService/getFoodCultureList':{
					title:'대표식품별 문화 정보',
					sub:'발행기관(제공기관/제공서비스),문헌명(학술지명),권/호,기사명(논문명),저자명,페이지정보,관련논문내용을 제공한다.',
					parameters:['type','pageNo','numOfRows','foodCd']
				}
			}
		},
		'특허청_한국전통 유사처방정보': {
			queries:{
				'/1430000/SimPreInfoService/getSimPreSearch':{
					title:'유사처방정보',
					sub:'유사처방(관리번호,유사처방명 등) 정보를 제공',
					parameters:['query'],
				},
				
			}
		},
		'특허청_한국전통 처방정보': {
			queries:{
				'/1430000/PreInfoService/getPreFieldSearch':{
					title:'처방 필드검색',
					sub:'약재처방(관리번호,처방명,구성약재 등) 정보 필드검색 제공',
					parameters:['mui','muiBool','pdis','pdisBool','pipc','pipcBool','pkwd','pkwdBool','pmed','pmedBool','pn','pnBool','psrc','psrcBool','ctrd','ctrdBool'],
				},
				'/1430000/PreInfoService/getPreFreeSearch':{
					title:'처방 자유검색',
					sub:'약재처방(관리번호,처방명,구성약재 등) 정보 자유검색 제공',
					parameters:['freeQuery'],
					
				},
				'/1430000/PreInfoService/getPreDetailInfo':{
					title:'처방 상세정보 조회',
					sub:'약재처방(관리번호,조제용법,주치병증 등) 정보를 제공',
					parameters:['preCd'],
					
				},
				'/1430000/PreInfoService/getPreSrcList':{
					title:'처방 상세정보 조회',
					sub:'약재처방(관리번호,처방명,구성약재 등) 정보 필드검색 제공',
					parameters:['psrc'],
					
				}
			}
		},
		'특허청_한국전통 약재정보': {
			queries:{
				'/1430000/MatInfoService/getMatFieldSearch':{
					title:'약재 필드검색',
					sub:'약재(관리번호,약재명,학명 등) 정보 필드검색 제공',
					parameters:['mdis','Prc','Ma','Tst','Ep','mct','mpre','Che','mipc','mkwd',
					'mnBool','scBool','pmnBool','lmnBool','fnBool','mpBool','micBool','meffBool',
					'mdisBool','prcBool','maBool','tstBool','epBool','mctBool','mpreBool','cheBool',
					'mipcBool','mkwdBool','Mn','Sc','pmn','Lmn','Fn','Mp','Mic','meff'],
					
				},
				'/1430000/MatInfoService/getMatFreeSearch':{
					title:'약재 자유검색',
					sub:'약재(관리번호,약재명,학명 등) 정보 자유검색 제공',
					parameters:['freeQuery'],
					
				},
				'/1430000/MatInfoService/getMatDetailInfo':{
					title:'약재 상세정보 조회',
					sub:'약재(관리번호,약재명,학명 등) 상세정보 제공',
					parameters:['medCd'],
					
				}
			}
		},
		'특허청_한국전통 한양방병증매핑정보':{
			queries:{
				'/1430000/OriMedicWesMedicNatDisMapngInfoService/getOriMedicWesMedicMapngSearch':{
					title:'한양방병증매핑정보',
					sub:'한양방병증매핑(관리번호,한방명칭,양방명칭) 정보를 제공',
					parameters:['st','sw'],
					
				}
			}
		},
		'특허청_한국전통 병증정보':{
			queries:{
				'/1430000/NatDisInfoService/getNatDisFieldSearch':{
					title:'병증 필드검색',
					sub:'병증(관리번호,병증명,병증정의 등) 정보 필드검색 제공',
					parameters:['dnm','ddfn','asnm','ewd','dmed','dpre','dipc','dkwd','dnmBool','ddfnBool','asnmBool','ewdBool','dmedBool','dpreBool','dipcBool','dkwdBool'],
					
				},
				'/1430000/NatDisInfoService/getNatDisFreeSearch':{
					title:'병증 자유검색',
					sub:'병증(관리번호,병증명,병증정의 등) 정보 자유검색 제공',
					parameters:['freeQuery'],
					
				},
				'/1430000/NatDisInfoService/getNatDisDetailInfo':{
					title:'병증 상세정보',
					sub:'병증(관리번호,병증명,병증정의 등) 상세정보 제공',
					parameters:['disCd'],
					
				}
			}
		},
		'음식보감서비스':{
			queries:{
				'/FoodDictionaryService/getFoodDictionary':{
					title:'음식보감목록조회',
					sub:'음식보감 목록 정보곡류 및 두류/채소류/과실류/해조류/어패류/기타를 제공하는 서비스',
					parameters:['Category'],
					
				},
				'/FoodDictionaryService/getFoodDictionaryDetail':{
					title:'음식보감상세보기조회',
					sub:'음식보감 상세보기 정보식품명, 설명, 영양분 등를 제공하는 서비스',
					parameters:['SNO'],
					
				}
			}
		}
	}
	const [apiType, setApiType] = useState({queries:{}})
	const [query, setQuery] = useState()
	const [form, setForm] = useState({serviceKey:keys.decodingKey})
	const [result, setResult] = useState()
	
	useEffect(() => {
		setForm(
		{serviceKey:keys.decodingKey, type:'JSON', numOfRows: 999}
		)
	},[query])
	
	const handleSubmit = () => {
		fetch(query.link+'?'+new URLSearchParams(form), {headers: {"Accept": "application/json"}}).then(res => {
			const parser = new DOMParser();
			if (query.xml) {
				res.text().then(data => {
					const xmlDoc = parser.parseFromString(data, "text/xml");
					console.log(xmlDoc)
				})
			} else {
				res.json().then(data => {
					console.log(data)
					setResult(data)
				})
			}
		}).catch(err => {
			console.log(err)
		})
	}
	
	const listObjects = (e) => {
		if (Array.isArray(e)) {
			return <div className="results">{e.map(ele => listObjects(ele))}</div>
		}
		else if (typeof e === 'object' && e !== null) {
			return <div>{Object.keys(e).map(ele => {
				const a = listObjects(e[ele]);
				if (a) return <p>{(convert[ele] || ele)}: {a}</p>
				else return null;
			})}</div>
		} else {
			return e;
		}
	}
	
  return (<>
    <div className="App">
		API 테스트
    </div>
	<div className="menu" onClick={(e) => {if (e.target.value) {setApiType(menu[e.target.value]); setQuery(null);}}}>
	{
		Object.keys(menu).map(key => {
			return <button value={key} key={key}>{key}</button>
		})
	}
	</div>
	<div className="menu" onClick={(e) => {if (e.target.value) setQuery({...apiType.queries[e.target.value], link:e.target.value})}}>
	{
		Object.entries(apiType.queries).map(([key, value]) => {
			return <button value={key} key={key}>{value.title}</button>
		})
	}
	</div>
	{
		query ? <div className="form" onChange={e => {
			if (e.target.id) {
				setForm(p => {
					const prev = {...p}
					prev[e.target.id] = e.target.value;
					console.log(prev[e.target.id])
					return prev;
				})
			}
			}}>
		<div>{query.title}</div>
		<div>{query.sub}</div>
			{
				query.parameters.map(key => {
					return (<>
						<label htmlFor={key}>{convert[key] || key}</label>
						<input id={key} value={form[key] || ''} /></>
					)
				})
			}
		<button onClick={handleSubmit}>api 전송</button>
		</div> : null
	}
	{result ?	<>
		{result.response.body ? listObjects(result.response.body) : null} </>
		:null
	}
	</>
  );
}

export default App;
