import * as Styled from './RulesDescription.styled';

const RulesDescription = () => (
  <Styled.RulesDescriptionContainer>
    <span> Remember, your password must include:</span>{' '}
    <Styled.OrderedRulesDesc style={{ listStyleType: 'disc' }}>
      <li>8-24 characters</li>
      <li>At least one uppercase character</li>
      <li>At least one special character</li>
    </Styled.OrderedRulesDesc>
  </Styled.RulesDescriptionContainer>
);
export default RulesDescription;
