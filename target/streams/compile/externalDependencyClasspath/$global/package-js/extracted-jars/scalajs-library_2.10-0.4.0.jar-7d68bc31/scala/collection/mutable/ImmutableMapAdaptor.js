/** @constructor */
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.imap$5 = null
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.constructor = ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor;
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.imap__Lscala_collection_immutable_Map = (function() {
  return this.imap$5
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.imap$und$eq__Lscala_collection_immutable_Map__V = (function(x$1) {
  this.imap$5 = x$1
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.size__I = (function() {
  return this.imap__Lscala_collection_immutable_Map().size__I()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.get__O__Lscala_Option = (function(key) {
  return this.imap__Lscala_collection_immutable_Map().get__O__Lscala_Option(key)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.isEmpty__Z = (function() {
  return this.imap__Lscala_collection_immutable_Map().isEmpty__Z()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.apply__O__O = (function(key) {
  return this.imap__Lscala_collection_immutable_Map().apply__O__O(key)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.contains__O__Z = (function(key) {
  return this.imap__Lscala_collection_immutable_Map().contains__O__Z(key)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.isDefinedAt__O__Z = (function(key) {
  return this.imap__Lscala_collection_immutable_Map().isDefinedAt__O__Z(key)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.keySet__Lscala_collection_Set = (function() {
  return this.imap__Lscala_collection_immutable_Map().keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.keysIterator__Lscala_collection_Iterator = (function() {
  return this.imap__Lscala_collection_immutable_Map().keysIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.keys__Lscala_collection_Iterable = (function() {
  return this.imap__Lscala_collection_immutable_Map().keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.valuesIterator__Lscala_collection_Iterator = (function() {
  return this.imap__Lscala_collection_immutable_Map().valuesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.values__Lscala_collection_Iterable = (function() {
  return this.imap__Lscala_collection_immutable_Map().values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.imap__Lscala_collection_immutable_Map().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.toList__Lscala_collection_immutable_List = (function() {
  return this.imap__Lscala_collection_immutable_Map().toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.update__O__O__V = (function(key, value) {
  this.imap$und$eq__Lscala_collection_immutable_Map__V(this.imap__Lscala_collection_immutable_Map().updated__O__O__Lscala_collection_immutable_Map(key, value))
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$$minus$eq__O__Lscala_collection_mutable_ImmutableMapAdaptor = (function(key) {
  this.imap$und$eq__Lscala_collection_immutable_Map__V(ScalaJS.as.scala_collection_immutable_Map(this.imap__Lscala_collection_immutable_Map().$$minus__O__Lscala_collection_Map(key)));
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ImmutableMapAdaptor = (function(kv) {
  this.imap$und$eq__Lscala_collection_immutable_Map__V(this.imap__Lscala_collection_immutable_Map().$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(kv));
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.clear__V = (function() {
  this.imap$und$eq__Lscala_collection_immutable_Map__V(this.imap__Lscala_collection_immutable_Map().empty__Lscala_collection_immutable_Map())
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.transform__Lscala_Function2__Lscala_collection_mutable_ImmutableMapAdaptor = (function(f) {
  this.imap$und$eq__Lscala_collection_immutable_Map__V(ScalaJS.as.scala_collection_immutable_Map(this.imap__Lscala_collection_immutable_Map().transform__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(f, ScalaJS.modules.scala_collection_immutable_Map().canBuildFrom__Lscala_collection_generic_CanBuildFrom())));
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.retain__Lscala_Function2__Lscala_collection_mutable_ImmutableMapAdaptor = (function(p) {
  this.imap$und$eq__Lscala_collection_immutable_Map__V(ScalaJS.as.scala_collection_immutable_Map(this.imap__Lscala_collection_immutable_Map().filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$1) {
    return (function(xy) {
      return ScalaJS.bZ(ScalaJS.uZ(p$1.apply__O__O__O(xy.$$und1__O(), xy.$$und2__O())))
    })
  })(p)))));
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.toString__T = (function() {
  return this.imap__Lscala_collection_immutable_Map().toString__T()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.retain__Lscala_Function2__Lscala_collection_mutable_MapLike = (function(p) {
  return this.retain__Lscala_Function2__Lscala_collection_mutable_ImmutableMapAdaptor(p)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.transform__Lscala_Function2__Lscala_collection_mutable_MapLike = (function(f) {
  return this.transform__Lscala_Function2__Lscala_collection_mutable_ImmutableMapAdaptor(f)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ImmutableMapAdaptor(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ImmutableMapAdaptor(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ImmutableMapAdaptor(kv)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ImmutableMapAdaptor(elem)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ImmutableMapAdaptor(key)
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.init___Lscala_collection_immutable_Map = (function(imap) {
  this.imap$5 = imap;
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.imap$und$eq__Lscala_collection_immutable_Map__ = (function(x$1) {
  return ScalaJS.bV(this.imap$und$eq__Lscala_collection_immutable_Map__V(x$1))
});
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.imap__ = (function() {
  return this.imap__Lscala_collection_immutable_Map()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ImmutableMapAdaptor = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ImmutableMapAdaptor.prototype = ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype;
ScalaJS.is.scala_collection_mutable_ImmutableMapAdaptor = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ImmutableMapAdaptor)))
});
ScalaJS.as.scala_collection_mutable_ImmutableMapAdaptor = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ImmutableMapAdaptor(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ImmutableMapAdaptor")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ImmutableMapAdaptor = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ImmutableMapAdaptor)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ImmutableMapAdaptor = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ImmutableMapAdaptor(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ImmutableMapAdaptor;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ImmutableMapAdaptor = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ImmutableMapAdaptor: 0
}, false, "scala.collection.mutable.ImmutableMapAdaptor", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_mutable_ImmutableMapAdaptor: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
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
ScalaJS.c.scala_collection_mutable_ImmutableMapAdaptor.prototype.$classData = ScalaJS.data.scala_collection_mutable_ImmutableMapAdaptor;
//@ sourceMappingURL=ImmutableMapAdaptor.js.map
