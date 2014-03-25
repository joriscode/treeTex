/** @constructor */
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSet.call(this);
  this.set$5 = null
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSet();
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.constructor = ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor;
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.set__Lscala_collection_immutable_Set = (function() {
  return this.set$5
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.set$und$eq__Lscala_collection_immutable_Set__V = (function(x$1) {
  this.set$5 = x$1
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.size__I = (function() {
  return this.set__Lscala_collection_immutable_Set().size__I()
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.isEmpty__Z = (function() {
  return this.set__Lscala_collection_immutable_Set().isEmpty__Z()
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.contains__O__Z = (function(elem) {
  return this.set__Lscala_collection_immutable_Set().contains__O__Z(elem)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.set__Lscala_collection_immutable_Set().foreach__Lscala_Function1__V(f)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.exists__Lscala_Function1__Z = (function(p) {
  return this.set__Lscala_collection_immutable_Set().exists__Lscala_Function1__Z(p)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.toList__Lscala_collection_immutable_List = (function() {
  return this.set__Lscala_collection_immutable_Set().toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.toString__T = (function() {
  return this.set__Lscala_collection_immutable_Set().toString__T()
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.set__Lscala_collection_immutable_Set().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$$plus$eq__O__Lscala_collection_mutable_ImmutableSetAdaptor = (function(elem) {
  this.set$und$eq__Lscala_collection_immutable_Set__V(ScalaJS.as.scala_collection_immutable_Set(this.set__Lscala_collection_immutable_Set().$$plus__O__Lscala_collection_Set(elem)));
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$$minus$eq__O__Lscala_collection_mutable_ImmutableSetAdaptor = (function(elem) {
  this.set$und$eq__Lscala_collection_immutable_Set__V(ScalaJS.as.scala_collection_immutable_Set(this.set__Lscala_collection_immutable_Set().$$minus__O__Lscala_collection_Set(elem)));
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.clear__V = (function() {
  this.set$und$eq__Lscala_collection_immutable_Set__V(ScalaJS.as.scala_collection_immutable_Set(this.set__Lscala_collection_immutable_Set().empty__Lscala_collection_GenSet()))
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ImmutableSetAdaptor(elem)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$$minus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_ImmutableSetAdaptor(elem)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ImmutableSetAdaptor(elem)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ImmutableSetAdaptor(elem)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$$plus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ImmutableSetAdaptor(elem)
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.init___Lscala_collection_immutable_Set = (function(set) {
  this.set$5 = set;
  ScalaJS.c.scala_collection_mutable_AbstractSet.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.set$und$eq__Lscala_collection_immutable_Set__ = (function(x$1) {
  return ScalaJS.bV(this.set$und$eq__Lscala_collection_immutable_Set__V(x$1))
});
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.set__ = (function() {
  return this.set__Lscala_collection_immutable_Set()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ImmutableSetAdaptor = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ImmutableSetAdaptor.prototype = ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype;
ScalaJS.is.scala_collection_mutable_ImmutableSetAdaptor = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ImmutableSetAdaptor)))
});
ScalaJS.as.scala_collection_mutable_ImmutableSetAdaptor = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ImmutableSetAdaptor(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ImmutableSetAdaptor")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ImmutableSetAdaptor = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ImmutableSetAdaptor)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ImmutableSetAdaptor = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ImmutableSetAdaptor(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ImmutableSetAdaptor;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ImmutableSetAdaptor = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ImmutableSetAdaptor: 0
}, false, "scala.collection.mutable.ImmutableSetAdaptor", ScalaJS.data.scala_collection_mutable_AbstractSet, {
  scala_collection_mutable_ImmutableSetAdaptor: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_AbstractSet: 1,
  scala_collection_mutable_Set: 1,
  scala_collection_mutable_SetLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_mutable_ImmutableSetAdaptor.prototype.$classData = ScalaJS.data.scala_collection_mutable_ImmutableSetAdaptor;
//@ sourceMappingURL=ImmutableSetAdaptor.js.map
