package br.com.ifpb.depsback.services;

import br.com.ifpb.depsback.model.Event;
import br.com.ifpb.depsback.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event create(Event event) {
        return eventRepository.save(event);
    }

    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    public Event findById(long idEvent) {
        return eventRepository.findById(idEvent).get();
    }

    public Event update(long idEvent, Event event) {
        event.setId(idEvent);
        return eventRepository.save(event);

        /*
        Event eventDb = this.findById(idEvent);
        eventDb.setDescription(event.getDescription());
        eventDb.setStatus(event.getStatus());
        eventDb.setTitle(event.getTitle());
        eventDb.setDate(event.getDate());
        Event eventAtualizado = eventRepository.save(eventDb);
        return eventAtualizado;
        */
    }

    public ResponseEntity<?> delete(long idusu) {
        return eventRepository.findById(idusu).map(record -> {
            eventRepository.deleteById(idusu);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }

    public void deleteAll() {
        eventRepository.deleteAll();
    }

}
