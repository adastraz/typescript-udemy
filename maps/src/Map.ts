export interface Item {
  location: {
    lat: number,
    lng: number
  }
  markerContent(): string
}

export class Map {
  private googleMap: google.maps.Map

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    })
  }

  addMarker(item: Item): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng
      }
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}