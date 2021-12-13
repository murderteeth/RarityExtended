import React, {useState, useEffect} from 'react'
import useRarity from 'contexts/useRarity'
import CandyIcon from 'components/icons/Candy'
import Adventurer from 'components/Adventurer'
import Button from 'components/Button'
import Box from 'components/Box'

function Index({ router }) {
  const	{currentAdventurer} = useRarity()
  const [summonerId, setSummonerId] = useState(currentAdventurer.tokenID)

  function selectRecipientButton() {
    return <div className={'w-adventure-card h-adventure-card'}>
      <Box
        onClick={() => {}}
        className={'w-full h-full p-4 flex justify-center items-center flex-col group hover:bg-gray-principal dark:hover:bg-dark-900 cursor-pointer\'} transition-colors relative mb-4 md:mb-0 cursor-pointer'}>
        <p className={'w-full h-full text-6xl flex items-center justify-center'}>?</p>
      </Box>
      <p className={'mt-10 text-sm text-black dark:text-white text-center'}>
        {`Choose a summoner to receive the tickets`}
      </p>
    </div>
  }

  return <section className={'max-w-full'}>
    <div className={'max-w-prose w-full relative mt-8 mx-auto px-3 flex flex-col items-center'}>
      <div>
        <p onClick={() => router.back()}
          className={'text-black dark:text-white text-megaxs absolute left-4 top-2 hover:underline cursor-pointer'}>
          {'< Back'}
        </p>
        <h1 className={'text-blood-500 text-base text-2xl'}>
          {'BLOOD SACRIFICE!'}
        </h1>
        <div className={'text-black dark:text-white text-xxs absolute right-4 top-2 flex flex-row items-center'}>
          {}
        </div>
      </div>

      <div className={'mt-24 flex flex-row'}>
        <div>
          <Adventurer adventurer={currentAdventurer} width={240} height={240} borderStyle={'bg-blood-600'} bgStyle={'bg-blood-900 dark:bg-blood-900'} noHover={true}></Adventurer>
          <Button onClick={() => {}}
            className={'mt-8 cursor-pointer text-center text-blood-200 bg-blood-900 hover:bg-blood-400 focus:bg-blood-400'}
            borderStyle={'bg-blood-600'}
            bgStyle={'bg-blood-900'}
            backgroundColor={'bg-gray-principal dark:bg-dark-400'}>
            <div className={'text-lg'}>
              {`B u r n`}
            </div>
          </Button>
        </div>
        <div className={'mx-16 h-adventure-card text-2xl flex items-center justify-center text-black dark:text-dark-100'}>
          -&gt;
        </div>
        <div>
          {selectRecipientButton()}
        </div>

      </div>
    </div>
  </section>
}

export default Index