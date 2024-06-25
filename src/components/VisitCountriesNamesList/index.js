import {
  CountryNameItem,
  CountryName,
  VisitButton,
  Visited,
} from './styledComponents'

const VisitCountriesNamesList = props => {
  const {nameDetails, onAddVisitedCountries} = props
  const {id, name, isVisited} = nameDetails

  const buttonText = isVisited ? 'Visited' : 'Visit'

  const onClickVisitButton = () => {
    onAddVisitedCountries(id)
  }

  return (
    <CountryNameItem>
      <CountryName>{name}</CountryName>
      {isVisited === true ? (
        <Visited>{buttonText}</Visited>
      ) : (
        <VisitButton
          type="button"
          onClick={onClickVisitButton}
          textColor={isVisited ? '#ffffff' : '#94a3b8'}
        >
          {buttonText}
        </VisitButton>
      )}
    </CountryNameItem>
  )
}
export default VisitCountriesNamesList
