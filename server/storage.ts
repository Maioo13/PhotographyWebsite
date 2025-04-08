import { 
  Photo, 
  Message, 
  InsertPhoto, 
  InsertMessage 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getAllPhotos(): Promise<Photo[]>;
  getPhoto(id: number): Promise<Photo | undefined>;
  getPhotosByCategory(category: string): Promise<Photo[]>;
  createPhoto(photo: InsertPhoto): Promise<Photo>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private photos: Map<number, Photo>;
  private messages: Map<number, Message>;
  private photoId: number;
  private messageId: number;

  constructor() {
    this.photos = new Map();
    this.messages = new Map();
    this.photoId = 1;
    this.messageId = 1;
    
    // Add sample photos data for development
    this.initializePhotos();
  }

  private initializePhotos() {
    const samplePhotos: InsertPhoto[] = [
      {
        title: "Urban Street Portrait",
        location: "New York City, USA",
        category: "portraits",
        description: "A portrait capturing the essence of city life and the individual's connection to the urban environment.",
        imageUrl: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Sony A7R IV",
        lens: "85mm f/1.4",
        year: "2023"
      },
      {
        title: "Mountain Reflection",
        location: "Canadian Rockies",
        category: "nature",
        description: "Clear lake waters reflecting the surrounding mountain range at dawn.",
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Canon EOS R5",
        lens: "24-70mm f/2.8",
        year: "2022"
      },
      {
        title: "Travel Markets",
        location: "Marrakech, Morocco",
        category: "travel",
        description: "The vibrant colors and textures of a traditional Moroccan market.",
        imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Fujifilm X-T4",
        lens: "16-55mm f/2.8",
        year: "2023"
      },
      {
        title: "Rainy Day in Tokyo",
        location: "Tokyo, Japan",
        category: "street",
        description: "The neon lights of Tokyo reflecting on rain-soaked streets.",
        imageUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Leica Q2",
        lens: "28mm f/1.7",
        year: "2022"
      },
      {
        title: "Desert Solitude",
        location: "Sahara Desert",
        category: "travel",
        description: "A lone figure walks across the vast dunes of the Sahara at sunset.",
        imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Nikon Z7",
        lens: "24-70mm f/2.8",
        year: "2023"
      },
      {
        title: "Portrait of an Artist",
        location: "Berlin, Germany",
        category: "portraits",
        description: "Environmental portrait of a mixed-media artist in their studio space.",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Canon EOS R6",
        lens: "50mm f/1.2",
        year: "2022"
      },
      {
        title: "Waterfall Cascade",
        location: "Iceland",
        category: "nature",
        description: "The powerful rush of water captured with a slow shutter speed.",
        imageUrl: "https://images.unsplash.com/photo-1494825514961-674db1ac2700?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Sony A7R IV",
        lens: "16-35mm f/2.8",
        year: "2023"
      },
      {
        title: "Market Vendor",
        location: "Bangkok, Thailand",
        category: "street",
        description: "A candid moment from a floating market showing Thai culinary traditions.",
        imageUrl: "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Fujifilm X-Pro3",
        lens: "35mm f/1.4",
        year: "2022"
      },
      {
        title: "Ancient Architecture",
        location: "Kyoto, Japan",
        category: "travel",
        description: "Traditional Japanese temple architecture captured during cherry blossom season.",
        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Canon EOS 5D Mark IV",
        lens: "70-200mm f/2.8",
        year: "2023"
      },
      {
        title: "Storm Approaching",
        location: "Great Plains, USA",
        category: "nature",
        description: "Dramatic storm clouds forming over rural farmland.",
        imageUrl: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Nikon D850",
        lens: "14-24mm f/2.8",
        year: "2021"
      },
      {
        title: "Café Culture",
        location: "Paris, France",
        category: "street",
        description: "A moment of pause at a traditional Parisian café.",
        imageUrl: "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Leica M10",
        lens: "35mm f/2",
        year: "2023"
      },
      {
        title: "Indigenous Portrait",
        location: "Papua New Guinea",
        category: "portraits",
        description: "Portrait of a tribal elder showcasing traditional face paint and adornments.",
        imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        camera: "Sony A9 II",
        lens: "85mm f/1.4",
        year: "2022"
      }
    ];
    
    // Add sample photos to the map
    samplePhotos.forEach(photo => {
      this.createPhoto(photo);
    });
  }

  async getAllPhotos(): Promise<Photo[]> {
    return Array.from(this.photos.values());
  }

  async getPhoto(id: number): Promise<Photo | undefined> {
    return this.photos.get(id);
  }

  async getPhotosByCategory(category: string): Promise<Photo[]> {
    return Array.from(this.photos.values()).filter(
      photo => photo.category === category
    );
  }

  async createPhoto(insertPhoto: InsertPhoto): Promise<Photo> {
    const id = this.photoId++;
    const now = new Date();
    const photo: Photo = { 
      ...insertPhoto, 
      id, 
      created_at: now 
    };
    this.photos.set(id, photo);
    return photo;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageId++;
    const now = new Date();
    const message: Message = { 
      ...insertMessage, 
      id, 
      created_at: now 
    };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
