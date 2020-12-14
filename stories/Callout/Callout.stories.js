import { storiesOf } from '@storybook/vue';
import Callout from '@/src/Components/Message/Callout';

storiesOf('Message/Callout', module).add('Callout', () => ({
	components: { Callout },
	template: `<div>
    <Callout class="mb-12" size="x-small">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="x-small" type="success">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="x-small" type="alert">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="small">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="small" type="success">
    과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="small" type="alert">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
        <Callout class="mb-12" size="medium">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="medium" type="success">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="medium" type="alert">
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="x-small" full>
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout class="mb-12" size="small" full>
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout><br/>
    <Callout size="medium" full>
      과제 내용과 멘토님의 피드백은 PEER 학습 효과를 위해<br/> 모든 참여자에게 공개됩니다.
    </Callout>
    </div>`,
}));
