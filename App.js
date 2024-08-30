import React, { useState, useEffect } from 'react';

class Team {
    constructor(name) {
        this.name = name;
        this.bans = [];
        this.picks = [];
    }

    ban(pokemon) {
        this.bans.push(pokemon);
    }

    pick(pokemon) {
        if (this.picks.length < 5) {
            this.picks.push(pokemon);
        }
    }

}

const teamA = new Team('Team A');
const teamB = new Team('Team B');

const pokemonList = [
{ id: 1, name: {Japanese:'マンムー',English:'Mamoswine'}, imageUrl: 'https://img.game8.co/3425561/5ebe96da72afe72274723d73077632ee.png/show', type:'ディフェンス' }, 
{ id: 2, name: {Japanese:'カビゴン',English:'Snorlax'}, imageUrl: 'https://img.game8.co/3408918/d14ada50d96ffc494616f06a70ea8284.png/show', type:'ディフェンス' },
{ id: 3, name: {Japanese:'オーロット',English:'Trevenant'}, imageUrl: 'https://img.game8.co/3468440/81aa64559d571ef6f1ce9560abf3d00f.png/show', type:'ディフェンス' },
{ id: 4, name: {Japanese:'カメックス',English:'Blastoise'}, imageUrl: 'https://img.game8.co/3411846/1f403227892789ee74a521f64f08e613.png/show', type:'ディフェンス' },
{ id: 5, name: {Japanese:'ブラッキー',English:'Umbreon'}, imageUrl: 'https://img.game8.co/3692123/4146dfade23a6d94f0011fd7fd5a2251.png/show', type:'ディフェンス' },
{ id: 6, name: {Japanese:'イワパレス',English:'Crustle'}, imageUrl: 'https://img.game8.co/3408919/fb3febfb3faa422d11d853e910ded662.png/show', type:'ディフェンス' },
{ id: 7, name: {Japanese:'ヤドラン',English:'SLowbro'}, imageUrl: 'https://img.game8.co/3408929/e3023e4063ca4f2227f69e298e389f20.png/show', type:'ディフェンス' },
{ id: 8, name: {Japanese:'ラプラス',English:'Lapras'}, imageUrl: 'https://img.game8.co/3674655/5429e8e97711517ba1144acc5b6ee5b2.png/show', type:'ディフェンス' },
{ id: 9, name: {Japanese:'ホウオウ',English:'Ho-Oh'}, imageUrl: 'https://img.game8.co/3936227/164a088966a281aa2fbcab7c7dfc6e5f.png/show', type:'ディフェンス' },
{ id: 10, name: {Japanese:'ヌメルゴン',English:'Goodra'}, imageUrl: 'https://img.game8.co/3655476/e828893cf6d9faf134eab32463e19379.png/show', type:'ディフェンス'  },
{ id: 11, name: {Japanese:'ヨクバリス',English:'Greedent'}, imageUrl: 'https://img.game8.co/3436922/80f16f8d0398dde3982981520c53007e.png/show', type:'ディフェンス'  },
{ id: 12, name: {Japanese:'プクリン',English:'Wigglytuff'}, imageUrl: 'https://img.game8.co/3408924/e9e00ec3b13e4e356bfb919932fdeb33.png/show', type:'サポート' },
{ id: 13, name: {Japanese:'ピクシー',English:'Clefable'}, imageUrl: 'https://img.game8.co/3579578/90f28d398c79b5dc7c7725b8f2d2f656.png/show', type:'サポート'  },
{ id: 14, name: {Japanese:'ハピナス',English:'Blissey'}, imageUrl: 'https://img.game8.co/3408923/3893729f8581f52e07ac5cb2c6caaaee.png/show', type:'サポート'  },
{ id: 15, name: {Japanese:'キュワワー',English:'Comfey'}, imageUrl: 'https://img.game8.co/3639294/5723f29e0b55ac17fd8059a8c306224f.png/show', type:'サポート' },
{ id: 16, name: {Japanese:'フーパ',English:'Hoopa'}, imageUrl: 'https://img.game8.co/3491652/ce79a3670b9d63c4795cf553d37db8f1.png/show', type:'サポート' },
{ id: 17, name: {Japanese:'バリヤード',English:'Mr.Mime'}, imageUrl: 'https://img.game8.co/3408925/d3271feb41363ab0ec29f1fde5e37609.png/show', type:'サポート' },
{ id: 18, name: {Japanese:'ヤミラミ',English:'Sableye'}, imageUrl: 'https://img.game8.co/3608959/93e8e46ef3821bbfd8d63e43b4e3d93a.png/show', type:'サポート' },
{ id: 19, name: {Japanese:'ウッウ',English:'Cramorant'}, imageUrl: 'https://img.game8.co/3408922/c76f2c566a80b8b261bda1a43b891608.png/show', type:'サポート' },
{ id: 20, name: {Japanese:'アローラキュウコン',English:'Alolan Ninetales'}, imageUrl: 'https://img.game8.co/3408914/43f35916cb971fa3630ec0498d733b38.png/show', type:'アタック' },
{ id: 21, name: {Japanese:'ピカチュウ',English:'Pikachu'}, imageUrl: 'https://img.game8.co/3408917/faf7fc1155634da35efb371861d43e09.png/show', type:'アタック' },
{ id: 22, name: {Japanese:'エーフィ',English:'Espeon'}, imageUrl: 'https://img.game8.co/3525744/f46e2c20b427a3389af71cc1e65b5bc0.png/show', type:'アタック' },
{ id: 23, name: {Japanese:'ニンフィア',English:'Sylveon'}, imageUrl: 'https://img.game8.co/3428180/c892bff43739020e0c7e2260cc3c70dc.png/show', type:'アタック' },
{ id: 24, name: {Japanese:'マフォクシー',English:'Delphax'}, imageUrl: 'https://img.game8.co/3535643/624f332e5d5d7001f6f214957c46e81a.png/show', type:'アタック' },
{ id: 25, name: {Japanese:'シャンデラ',English:'Chandelure'}, imageUrl: 'https://img.game8.co/3677839/6298fc11a8f4344acf4459ddbc80f3be.png/show', type:'アタック' },
{ id: 26, name: {Japanese:'サーナイト',English:'Gardevoir'}, imageUrl: 'https://img.game8.co/3408915/5cc956a3b1720eaaac1be7a6d0b59d81.png/show', type:'アタック' },
{ id: 27, name: {Japanese:'ミライドン',English:'Miraidon'}, imageUrl: 'https://img.game8.co/3845163/994a4f2084469086d7e1f0b625d2056e.png/show', type:'アタック' },
{ id: 28, name: {Japanese:'ミュウ',English:'Mew'}, imageUrl: 'https://img.game8.co/3568507/7cc85b48563071b66f1c9a884ff8cb9f.png/show', type:'アタック' },
{ id: 29, name: {Japanese:'インテレオン',English:'Inteleon'}, imageUrl: 'https://img.game8.co/3731059/bce9565e38267c8718f4d070822614ca.png/show', type:'アタック' },
{ id: 30, name: {Japanese:'ミュウツーY',English:'MewtwoY'}, imageUrl: 'https://img.game8.co/3804967/a080818c7ac9bb0326d17bd508a8891c.png/show', type:'アタック' },
{ id: 31, name: {Japanese:'グレイシア',English:'Glaceon'}, imageUrl: 'https://img.game8.co/3549540/ffe8e6d93ced167f5f358f22c6593f63.png/show', type:'アタック' },
{ id: 32, name: {Japanese:'エースバーン',English:'Cinderace'}, imageUrl: 'https://img.game8.co/3408921/3116d247d8c6d7b1070351ba0348b215.png/show', type:'アタック' },
{ id: 33, name: {Japanese:'ゲッコウガ',English:'Greninja'}, imageUrl: 'https://img.game8.co/3408927/5c62d99c62ba7bc68ea7cfbb177a66bb.png/show', type:'アタック' },
{ id: 34, name: {Japanese:'ドラパルト',English:'Dragapult'}, imageUrl: 'https://img.game8.co/3624005/d8c2b3300f2a42d44c7b3cda246adca1.png/show', type:'アタック' },
{ id: 35, name: {Japanese:'ジュラルドン',English:'Duraludon'}, imageUrl: 'https://img.game8.co/3498222/a13d2518da1e974f0cbc3abb4fcf34cc.png/show', type:'アタック' },
{ id: 36, name: {Japanese:'ジュナイパー',English:'Decidueye'}, imageUrl: 'https://img.game8.co/3450162/60d614359361252346bfbf9482bcf450.png/show', type:'アタック' },
{ id: 37, name: {Japanese:'ルカリオ',English:'Lucario'}, imageUrl: 'https://img.game8.co/3408932/88721d5db457a0765410a754cdafcc71.png/show', type:'バランス' },
{ id: 38, name: {Japanese:'カイリキー',English:'Machamp'}, imageUrl: 'https://img.game8.co/3408930/44f9f65618d47b4affe642cdf5270c31.png/show', type:'バランス'},
{ id: 39, name: {Japanese:'リザードン',English:'Charizard'}, imageUrl: 'https://img.game8.co/3408920/ed4ca1b2390c2891e8a1b53012b89ad5.png/show', type:'バランス'},
{ id: 40, name: {Japanese:'フシギバナ',English:'Venesaur'}, imageUrl: 'https://img.game8.co/3408931/f6bddcfbe8ecf4cba0b037f39c31a87a.png/show', type:'バランス'},
{ id: 41, name: {Japanese:'ギャラドス',English:'Gyarados'}, imageUrl: 'https://img.game8.co/3825582/f7aeef46df5d649c68749808e1c870c8.png/show', type:'バランス'},
{ id: 42, name: {Japanese:'カイリュー',English:'Dragonite'}, imageUrl: 'https://img.game8.co/3459498/5f47d495d5f7241739b6c1f588c828b5.png/show', type:'バランス'},
{ id: 43, name: {Japanese:'ミュウツーＸ',English:'MewtwoX'}, imageUrl: 'https://img.game8.co/3804965/ed7433ae3d1e2b842303a418acdbd44a.png/show', type:'バランス'},
{ id: 44, name: {Japanese:'マリルリ',English:'Azmarill'}, imageUrl: 'https://img.game8.co/3513576/5d04fb2f7afe24c73e1e07abedfb509d.png/show', type:'バランス'},
{ id: 45, name: {Japanese:'ハッサム',English:'Scizor'}, imageUrl: 'https://img.game8.co/3587327/255870f5aa3c65493c45572687e78f80.png/show', type:'バランス'},
{ id: 46, name: {Japanese:'バンギラス',English:'Tyranitar'}, imageUrl: 'https://img.game8.co/3562398/58b6d47af0a6bd89882381201ba5ada9.png/show', type:'バランス'},
{ id: 47, name: {Japanese:'バシャーモ',English:'Blaziken'}, imageUrl: 'https://img.game8.co/3749395/91f3576d07d6dc7f71bd994b3dd83ddb.png/show', type:'バランス'},
{ id: 48, name: {Japanese:'メタグロス',English:'Metagross'}, imageUrl: 'https://img.game8.co/3813357/a92d2fe5866ca6fafe79516aef1fefa5.png/show', type:'バランス'},
{ id: 49, name: {Japanese:'ガブリアス',English:'Garchomp'}, imageUrl: 'https://img.game8.co/3408926/8b6a097c8f243c9f831c0cae8ea63537.png/show', type:'バランス'},
{ id: 50, name: {Japanese:'ギルガルド',English:'Aegislash'}, imageUrl: 'https://img.game8.co/3480521/a4f51eac8541ccda959b8e9f7fd96703.png/show', type:'バランス'},
{ id: 51, name: {Japanese:'アマージョ',English:'Tsareena'}, imageUrl: 'https://img.game8.co/3456947/d548f573a86ff0776adebd5f940408f5.png/show', type:'バランス'},
{ id: 52, name: {Japanese:'ミミッキュ',English:'Mimikyu'}, imageUrl: 'https://img.game8.co/3749394/79600d4095d5c79108005b3aef236380.png/show', type:'バランス'},
{ id: 53, name: {Japanese:'マッシブーン',English:'Buzzwole'}, imageUrl: 'https://img.game8.co/3556724/de369351425bdd25080e7510583a2315.png/show', type:'バランス'},
{ id: 54, name: {Japanese:'ウーラオス',English:'Urshifu'}, imageUrl: 'https://img.game8.co/3617989/b50e4a97f3291dcad7a85317e9eb2b47.png/show', type:'バランス'},
{ id: 55, name: {Japanese:'タイレーツ',English:'Falinks'}, imageUrl: 'https://img.game8.co/3871849/ef5d1c031f6a54ade6867edaff11d66b.png/show', type:'バランス'},
{ id: 56, name: {Japanese:'ザシアン',English:'Zacian'}, imageUrl: 'https://img.game8.co/3804966/2e27d97c1eb584a2e752e64ea043c4c0.png/show', type:'バランス'},
{ id: 57, name: {Japanese:'ソウブレイズ',English:'Ceruledge'}, imageUrl: 'https://img.game8.co/3907753/9430a1bbd53154f6a613f24f7a0fe11f.png/show', type:'バランス'},
{ id: 58, name: {Japanese:'リーフィア',English:'Leafeon'}, imageUrl: 'https://img.game8.co/3692122/666ffa6b7bd1b235ae2498236af883a0.png/show', type:'スピード'},
{ id: 59, name: {Japanese:'ゲンガー',English:'Gengar'}, imageUrl: 'https://img.game8.co/3408916/6789fdcccb78ebb02bfb5d4f211bb761.png/show', type:'スピード'},
{ id: 60, name: {Japanese:'アブソル',English:'Absol'}, imageUrl: 'https://img.game8.co/3408910/34f0c5d8da01304daeb9ee9160182e83.png/show', type:'スピード'},
{ id: 61, name: {Japanese:'ゾロアーク',English:'Zoroark'}, imageUrl: 'https://img.game8.co/3601736/8e0ac36da2604fdcd0d053e54dbaa15d.png/show', type:'スピード'},
{ id: 62, name: {Japanese:'ドードリオ',English:'Dodrio'}, imageUrl: 'https://img.game8.co/3581133/47880caa5d061550b077534c3319bdf4.png/show', type:'スピード'},
{ id: 63, name: {Japanese:'ファイアロー',English:'Talonflame'}, imageUrl: 'https://img.game8.co/3408928/b0ceaa5d446346ecbacaede409186141.png/show', type:'スピード'},
{ id: 64, name: {Japanese: 'ゼラオラ',English:'Zeraora'}, imageUrl: 'https://img.game8.co/3408933/c39cf9607996f8845ecdf1602ed7bef2.png/show', type:'スピード'},
{ id: 65, name: {Japanese:'マスカーニャ',English:'Meawscarada'}, imageUrl: 'https://img.game8.co/3749396/716a21dc1d03d8ece2927f1dff6c72da.png/show', type:'スピード'},


    // Add more Pokémon as needed
];

const default_draft = [
  [teamA, 'BAN'],
  [teamB, 'BAN'],
  [teamA, 'BAN'],
  [teamB, 'BAN'],
  [teamA, 'PICK'],
  [teamB, 'PICK'],
  [teamB, 'PICK'],
  [teamA, 'PICK'],
  [teamA, 'PICK'],
  [teamB, 'PICK'],
  [teamB, 'PICK'],
  [teamA, 'PICK'],
  [teamA, 'PICK'],
  [teamB, 'PICK']
];

function App() {
  const [phase, setPhase] = useState('ban');
  const [currentTeam, setCurrentTeam] = useState(default_draft[0][0]);
  const [currentAction, setCurrentAction] = useState(default_draft[0][1]);
  const [bans, setBans] = useState([]);
  const [picks, setPicks] = useState([]);
  const [draftIndex, setDraftIndex] = useState(0);
  const [hoveredPokemon, setHoveredPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
      fetch('https://uniteapi.dev/meta')
          .then(response => response.json())
          .then(data => {
              const updatedData = {};
              data.pokemon.forEach(pokemon => {
                  updatedData[pokemon.name] = pokemon;
              });
              setPokemonData(updatedData);
          })
          .catch(error => console.error('Error fetching Pokémon data:', error));
  }, []);

  const handlePokemonClick = (pokemon) => {
      if (isPokemonDisabled(pokemon)) {
          return;
      }

      if (currentAction === 'BAN') {
          if (!bans.includes(pokemon) && !picks.includes(pokemon)) {
              currentTeam.ban(pokemon);
              setBans([...bans, pokemon]);
              updateDraft(1);
          }
      } else if (currentAction === 'PICK') {
          if (!bans.includes(pokemon) && !picks.includes(pokemon)) {
              currentTeam.pick(pokemon);
              setPicks([...picks, pokemon]);
              updateDraft(1);
          }
      }
  };

  const updateDraft = (step) => {
      const nextIndex = draftIndex + step;
      if (nextIndex >= 0 && nextIndex < default_draft.length) {
          setDraftIndex(nextIndex);
          setCurrentTeam(default_draft[nextIndex][0]);
          setCurrentAction(default_draft[nextIndex][1]);
      }
  };

  const allPicksCompleted = teamA.picks.length === 5 && teamB.picks.length === 5;

  const handleMouseEnter = (pokemon) => {
      setTimeout(() => {
          setHoveredPokemon(pokemon);
      }, 2000);
  };

  const handleMouseLeave = () => {
      setHoveredPokemon(null);
  };

  const isPokemonDisabled = (pokemon) => {
      const isMewtwoY = pokemon.name.english === 'MewtwoY';
      const isMewtwoX = pokemon.name.english === 'MewtwoX';
      const isMewtwoYSelected = bans.some(p => p.name.english === 'MewtwoY') || picks.some(p => p.name.english === 'MewtwoY');
      const isMewtwoXSelected = bans.some(p => p.name.english === 'MewtwoX') || picks.some(p => p.name.english === 'MewtwoX');
      return (isMewtwoY && isMewtwoXSelected) || (isMewtwoX && isMewtwoYSelected);
  };


  
  return (
      <div>
          <h1>Pokémon Unite Draft Simulator</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                  <h2>Team A</h2>
                  <div>
                      <h3>Bans:</h3>
                      {teamA.bans.map(p => (
                          <div key={p.id}>
                              <img src={p.imageUrl} alt={p.name.english} style={{ width: '60px' }} />
                              {pokemonData[p.name.english] && (
                                  <p>Win Rate: {pokemonData[p.name.english].winRateLastWeek}%</p>
                              )}
                          </div>
                      ))}
                  </div>
                  <div>
                      <h3>Picks:</h3>
                      {teamA.picks.map(p => (
                          <div key={p.id}>
                              <img src={p.imageUrl} alt={p.name.english} style={{ width: '80px' }} />
                              {pokemonData[p.name.english] && (
                                  <p>Win Rate: {pokemonData[p.name.english].winRateLastWeek}%</p>
                              )}
                          </div>
                      ))}
                  </div>
              </div>
              <div>
                  {pokemonList.map(pokemon => (
                      <div key={pokemon.id} style={{ position: 'relative', display: 'inline-block' }}>
                          <img
                              src={pokemon.imageUrl}
                              alt={pokemon.name.english}
                              style={{
                                  width: '100px',
                                  cursor: 'pointer',
                                  opacity: bans.includes(pokemon) || picks.includes(pokemon) || isPokemonDisabled(pokemon) ? 0.5 : 1
                              }}
                              onClick={() => handlePokemonClick(pokemon)}
                              onMouseEnter={() => handleMouseEnter(pokemon)}
                              onMouseLeave={handleMouseLeave}
                          />
                          {hoveredPokemon === pokemon && pokemonData[pokemon.name.english] && (
                              <div style={{
                                  position: 'absolute',
                                  top: '110%',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  backgroundColor: 'white',
                                  border: '1px solid black',
                                  padding: '5px',
                                  zIndex: 1
                              }}>
                                  <p>Win Rate: {pokemonData[pokemon.name.english].winRateLastWeek}%</p>
                                  <p>Pick Rate: {pokemonData[pokemon.name.english].pickRate}%</p>
                                  <p>Ban Rate: {pokemonData[pokemon.name.english].banRate}%</p>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
              <div>
                  <h2>Team B</h2>
                  <div>
                      <h3>Bans:</h3>
                      {teamB.bans.map(p => (
                          <div key={p.id}>
                              <img src={p.imageUrl} alt={p.name.english} style={{ width: '60px' }} />
                              {pokemonData[p.name.english] && (
                                  <p>Win Rate: {pokemonData[p.name.english].winRateLastWeek}%</p>
                              )}
                          </div>
                      ))}
                  </div>
                  <div>
                      <h3>Picks:</h3>
                      {teamB.picks.map(p => (
                          <div key={p.id}>
                              <img src={p.imageUrl} alt={p.name.english} style={{ width: '80px' }} />
                              {pokemonData[p.name.english] && (
                                  <p>Win Rate: {pokemonData[p.name.english].winRateLastWeek}%</p>
                              )}
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;