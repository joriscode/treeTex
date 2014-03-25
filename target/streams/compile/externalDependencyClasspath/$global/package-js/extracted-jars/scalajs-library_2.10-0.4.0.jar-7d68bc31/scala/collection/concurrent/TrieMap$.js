/** @constructor */
ScalaJS.c.scala_collection_concurrent_TrieMap$ = (function() {
  ScalaJS.c.scala_collection_generic_MutableMapFactory.call(this);
  this.inodeupdater$4 = null
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype = new ScalaJS.inheritable.scala_collection_generic_MutableMapFactory();
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_TrieMap$;
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.inodeupdater__Ljava_util_concurrent_atomic_AtomicReferenceFieldUpdater = (function() {
  return this.inodeupdater$4
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_generic_GenMapFactory$MapCanBuildFrom().init___Lscala_collection_generic_GenMapFactory(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.empty__Lscala_collection_concurrent_TrieMap = (function() {
  return new ScalaJS.c.scala_collection_concurrent_TrieMap().init___()
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.readResolve__p4__O = (function() {
  return ScalaJS.modules.scala_collection_concurrent_TrieMap()
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.empty__Lscala_collection_GenMap = (function() {
  return this.empty__Lscala_collection_concurrent_TrieMap()
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_concurrent_TrieMap()
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_generic_MutableMapFactory.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_concurrent_TrieMap = this;
  this.inodeupdater$4 = ScalaJS.modules.java_util_concurrent_atomic_AtomicReferenceFieldUpdater().newUpdater__Ljava_lang_Class__Ljava_lang_Class__T__Ljava_util_concurrent_atomic_AtomicReferenceFieldUpdater(ScalaJS.data.scala_collection_concurrent_INodeBase.getClassOf(), ScalaJS.data.scala_collection_concurrent_MainNode.getClassOf(), "mainnode");
  return this
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.inodeupdater__ = (function() {
  return this.inodeupdater__Ljava_util_concurrent_atomic_AtomicReferenceFieldUpdater()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_TrieMap$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_TrieMap$.prototype = ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype;
ScalaJS.is.scala_collection_concurrent_TrieMap$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_TrieMap$)))
});
ScalaJS.as.scala_collection_concurrent_TrieMap$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_TrieMap$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.TrieMap")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_TrieMap$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_TrieMap$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_TrieMap$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_TrieMap$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.TrieMap;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_TrieMap$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_TrieMap$: 0
}, false, "scala.collection.concurrent.TrieMap$", ScalaJS.data.scala_collection_generic_MutableMapFactory, {
  scala_collection_concurrent_TrieMap$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_MutableMapFactory: 1,
  scala_collection_generic_MapFactory: 1,
  scala_collection_generic_GenMapFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_TrieMap$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_TrieMap$;
ScalaJS.moduleInstances.scala_collection_concurrent_TrieMap = undefined;
ScalaJS.modules.scala_collection_concurrent_TrieMap = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_TrieMap)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_TrieMap = new ScalaJS.c.scala_collection_concurrent_TrieMap$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_TrieMap
});
//@ sourceMappingURL=TrieMap$.js.map
