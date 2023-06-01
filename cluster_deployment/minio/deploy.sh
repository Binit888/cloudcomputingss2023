sudo kubectl apply -f minio-storage.yaml \
&& sleep 5 \
&&  sudo kubectl  apply -f minio.yaml \
&& sleep 5 \
&&  sudo kubectl  apply -f minio-service.yaml 
