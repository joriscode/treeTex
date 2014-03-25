/** @constructor */
ScalaJS.c.scala_collection_mutable_History = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractIterable.call(this);
  this.log$4 = null;
  this.maxHistory$4 = 0
});
ScalaJS.c.scala_collection_mutable_History.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractIterable();
ScalaJS.c.scala_collection_mutable_History.prototype.constructor = ScalaJS.c.scala_collection_mutable_History;
ScalaJS.c.scala_collection_mutable_History.prototype.log__Lscala_collection_mutable_Queue = (function() {
  return this.log$4
});
ScalaJS.c.scala_collection_mutable_History.prototype.maxHistory__I = (function() {
  return this.maxHistory$4
});
ScalaJS.c.scala_collection_mutable_History.prototype.notify__O__O__V = (function(pub, event) {
  if ((this.log__Lscala_collection_mutable_Queue().length__I() >= this.maxHistory__I())) {
    this.log__Lscala_collection_mutable_Queue().dequeue__O()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  this.log__Lscala_collection_mutable_Queue().enqueue__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(pub, event)]), 1)))
});
ScalaJS.c.scala_collection_mutable_History.prototype.size__I = (function() {
  return this.log__Lscala_collection_mutable_Queue().length__I()
});
ScalaJS.c.scala_collection_mutable_History.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.log__Lscala_collection_mutable_Queue().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_History.prototype.events__Lscala_collection_Iterator = (function() {
  return this.log__Lscala_collection_mutable_Queue().iterator__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return x$1.$$und2__O()
    })
  })()))
});
ScalaJS.c.scala_collection_mutable_History.prototype.clear__V = (function() {
  this.log__Lscala_collection_mutable_Queue().clear__V()
});
ScalaJS.c.scala_collection_mutable_History.prototype.equals__O__Z = (function(obj) {
  var x1 = obj;
  if (ScalaJS.is.scala_collection_mutable_History(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_History(x1);
    return this.log__Lscala_collection_mutable_Queue().equals__O__Z(x2.log__Lscala_collection_mutable_Queue())
  };
  return false
});
ScalaJS.c.scala_collection_mutable_History.prototype.hashCode__I = (function() {
  return this.log__Lscala_collection_mutable_Queue().hashCode__I()
});
ScalaJS.c.scala_collection_mutable_History.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.init___.call(this);
  this.log$4 = new ScalaJS.c.scala_collection_mutable_Queue().init___();
  this.maxHistory$4 = 1000;
  return this
});
ScalaJS.c.scala_collection_mutable_History.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_History.prototype.events__ = (function() {
  return this.events__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_History.prototype.notify__O__O__ = (function(pub, event) {
  return ScalaJS.bV(this.notify__O__O__V(pub, event))
});
ScalaJS.c.scala_collection_mutable_History.prototype.maxHistory__ = (function() {
  return ScalaJS.bI(this.maxHistory__I())
});
ScalaJS.c.scala_collection_mutable_History.prototype.log__ = (function() {
  return this.log__Lscala_collection_mutable_Queue()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_History = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_History.prototype = ScalaJS.c.scala_collection_mutable_History.prototype;
ScalaJS.is.scala_collection_mutable_History = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_History)))
});
ScalaJS.as.scala_collection_mutable_History = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_History(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.History")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_History = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_History)))
});
ScalaJS.asArrayOf.scala_collection_mutable_History = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_History(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.History;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_History = new ScalaJS.ClassTypeData({
  scala_collection_mutable_History: 0
}, false, "scala.collection.mutable.History", ScalaJS.data.scala_collection_mutable_AbstractIterable, {
  scala_collection_mutable_History: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Subscriber: 1,
  scala_collection_mutable_AbstractIterable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_History.prototype.$classData = ScalaJS.data.scala_collection_mutable_History;
//@ sourceMappingURL=History.js.map
