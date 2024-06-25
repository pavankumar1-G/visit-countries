import {Component} from 'react'

import VisitedCountries from '../VisitedCountries'
import VisitCountriesNamesList from '../VisitCountriesNamesList'

import {
  VisitCountriesAppContainer,
  CountriesHeading,
  CountriesNameList,
  VisitedCountriesContainer,
  VisitedCountriesHeading,
  NoCountriesViewContainer,
  NoCountriesStatus,
  VisitedCountriesList,
} from './styledComponents'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class VisitCountries extends Component {
  state = {
    countriesList: initialCountriesList,
    countriesNamesList: initialCountriesList,
  }

  onAddVisitedCountries = id => {
    const {countriesList, countriesNamesList} = this.state

    const visitedCountry = countriesList.map(eachCountry => {
      if (eachCountry.id === id) {
        const updatedCountries = {
          ...eachCountry,
          isVisited: !eachCountry.isVisited,
        }
        return updatedCountries
      }
      return eachCountry
    })

    const visitedStatus = countriesNamesList.map(eachName => {
      if (eachName.id === id) {
        const updatedStatus = {...eachName, isVisited: !eachName.isVisited}
        return updatedStatus
      }
      return eachName
    })
    this.setState({
      countriesList: visitedCountry,
      countriesNamesList: visitedStatus,
    })
  }

  updateCountriesList = id => {
    const {countriesList, countriesNamesList} = this.state

    const reupdatedList2 = countriesList.map(eachCountry => {
      if (eachCountry.id === id) {
        const updateIsActiveKey = {
          ...eachCountry,
          isVisited: !eachCountry.isVisited,
        }
        return updateIsActiveKey
      }
      return eachCountry
    })

    this.setState({countriesList: reupdatedList2})

    const filteredCountriesList = countriesList.filter(
      eachOne => eachOne.id !== id,
    )
    // const removedCountry = countriesList.filter(eachOne => eachOne.id === id)
    // console.log(removedCountry)
    const reupdatedList = countriesNamesList.map(eachName => {
      if (eachName.id === id) {
        const updatedName = {...eachName, isVisited: !eachName.isVisited}
        return updatedName
      }
      return eachName
    })
    this.setState({
      countriesList: filteredCountriesList,
      countriesNamesList: reupdatedList,
    })
    // console.log(removedCountryList)
  }

  render() {
    const {countriesList, countriesNamesList} = this.state
    const updatedCountriesList = countriesList.filter(
      eachItem => eachItem.isVisited === true,
    )

    return (
      <VisitCountriesAppContainer>
        <CountriesHeading>Countries</CountriesHeading>
        <CountriesNameList>
          {countriesNamesList.map(eachItem => (
            <VisitCountriesNamesList
              key={eachItem.id}
              nameDetails={eachItem}
              onAddVisitedCountries={this.onAddVisitedCountries}
            />
          ))}
        </CountriesNameList>

        <VisitedCountriesContainer>
          <VisitedCountriesHeading>Visited Countries</VisitedCountriesHeading>
          {updatedCountriesList.length === 0 ? (
            <NoCountriesViewContainer>
              <NoCountriesStatus>No Countries Visited yet!</NoCountriesStatus>
            </NoCountriesViewContainer>
          ) : (
            <VisitedCountriesList>
              {updatedCountriesList.map(eachItem => (
                <VisitedCountries
                  key={eachItem.id}
                  visitedDetails={eachItem}
                  updateCountriesList={this.updateCountriesList}
                />
              ))}
            </VisitedCountriesList>
          )}
        </VisitedCountriesContainer>
      </VisitCountriesAppContainer>
    )
  }
}
export default VisitCountries
