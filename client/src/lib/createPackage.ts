// Package creation stub for LearnPack
export interface CreatePackageRequest {
  topic: string;
  purpose: string;
}

export interface CreatePackageResponse {
  success: boolean;
  packageId?: string;
  message: string;
}

export async function createPackage(topic: string, purpose: string): Promise<CreatePackageResponse> {
  // Simulate API latency (~1.2s as specified)
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Log the request for development
  console.log('Package Creation Request:', { topic, purpose });
  
  // Simulate successful package creation
  const packageId = `pkg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  return {
    success: true,
    packageId,
    message: 'Draft created! Opening editor…'
  };
}