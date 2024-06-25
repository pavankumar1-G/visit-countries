import {
  VistedCountriesItem,
  ThumbnailImage,
  NameAndRemoveButtonContainer,
  VisitedName,
  RemoveButton,
} from './styledComponents'

const VisitedCountries = props => {
  const {visitedDetails, updateCountriesList} = props
  const {id, imageUrl, name} = visitedDetails

  const onClickRemoveButton = () => {
    updateCountriesList(id)
  }

  return (
    <VistedCountriesItem>
      <ThumbnailImage src={imageUrl} alt="thumbnail" />
      <NameAndRemoveButtonContainer>
        <VisitedName>{name}</VisitedName>
        <RemoveButton
          type="button"
          onClick={onClickRemoveButton}
          data-testid="delete"
        >
          Remove
        </RemoveButton>
      </NameAndRemoveButtonContainer>
    </VistedCountriesItem>
  )
}
export default VisitedCountries
