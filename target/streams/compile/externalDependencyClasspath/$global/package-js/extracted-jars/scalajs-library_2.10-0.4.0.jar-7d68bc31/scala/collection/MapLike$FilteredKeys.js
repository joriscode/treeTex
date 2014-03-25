/** @constructor */
ScalaJS.c.scala_collection_MapLike$FilteredKeys = (function() {
  ScalaJS.c.scala_collection_AbstractMap.call(this);
  this.scala$collection$MapLike$FilteredKeys$$p$f = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype = new ScalaJS.inheritable.scala_collection_AbstractMap();
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.constructor = ScalaJS.c.scala_collection_MapLike$FilteredKeys;
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return ScalaJS.impls.scala_collection_DefaultMap$class__$plus__Lscala_collection_DefaultMap__Lscala_Tuple2__Lscala_collection_Map(this, kv)
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return ScalaJS.impls.scala_collection_DefaultMap$class__$minus__Lscala_collection_DefaultMap__O__Lscala_collection_Map(this, key)
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.foreach__Lscala_Function1__V = (function(f) {
  this.scala$collection$MapLike$FilteredKeys$$$outer__Lscala_collection_MapLike().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$1) {
    return (function(kv) {
      if (ScalaJS.uZ(arg$outer.scala$collection$MapLike$FilteredKeys$$p$f.apply__O__O(kv.$$und1__O()))) {
        return f$1.apply__O__O(kv)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this, f)))
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.scala$collection$MapLike$FilteredKeys$$$outer__Lscala_collection_MapLike().iterator__Lscala_collection_Iterator().filter__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(kv) {
      return ScalaJS.bZ(ScalaJS.uZ(arg$outer.scala$collection$MapLike$FilteredKeys$$p$f.apply__O__O(kv.$$und1__O())))
    })
  })(this)))
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.contains__O__Z = (function(key) {
  return (this.scala$collection$MapLike$FilteredKeys$$$outer__Lscala_collection_MapLike().contains__O__Z(key) && ScalaJS.uZ(this.scala$collection$MapLike$FilteredKeys$$p$f.apply__O__O(key)))
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.get__O__Lscala_Option = (function(key) {
  if ((!ScalaJS.uZ(this.scala$collection$MapLike$FilteredKeys$$p$f.apply__O__O(key)))) {
    return ScalaJS.modules.scala_None()
  } else {
    return this.scala$collection$MapLike$FilteredKeys$$$outer__Lscala_collection_MapLike().get__O__Lscala_Option(key)
  }
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.scala$collection$MapLike$FilteredKeys$$$outer__Lscala_collection_MapLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_Map(key)
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_Map(elem)
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_Map(kv)
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.init___Lscala_collection_MapLike__Lscala_Function1 = (function($$outer, p) {
  this.scala$collection$MapLike$FilteredKeys$$p$f = p;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_DefaultMap$class__$init$__Lscala_collection_DefaultMap__V(this);
  return this
});
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.scala$collection$MapLike$FilteredKeys$$$outer__ = (function() {
  return this.scala$collection$MapLike$FilteredKeys$$$outer__Lscala_collection_MapLike()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_MapLike$FilteredKeys = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_MapLike$FilteredKeys.prototype = ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype;
ScalaJS.is.scala_collection_MapLike$FilteredKeys = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_MapLike$FilteredKeys)))
});
ScalaJS.as.scala_collection_MapLike$FilteredKeys = (function(obj) {
  if ((ScalaJS.is.scala_collection_MapLike$FilteredKeys(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.MapLike$FilteredKeys")
  }
});
ScalaJS.isArrayOf.scala_collection_MapLike$FilteredKeys = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_MapLike$FilteredKeys)))
});
ScalaJS.asArrayOf.scala_collection_MapLike$FilteredKeys = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_MapLike$FilteredKeys(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.MapLike$FilteredKeys;", depth)
  }
});
ScalaJS.data.scala_collection_MapLike$FilteredKeys = new ScalaJS.ClassTypeData({
  scala_collection_MapLike$FilteredKeys: 0
}, false, "scala.collection.MapLike$FilteredKeys", ScalaJS.data.scala_collection_AbstractMap, {
  scala_collection_MapLike$FilteredKeys: 1,
  scala_collection_DefaultMap: 1,
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
ScalaJS.c.scala_collection_MapLike$FilteredKeys.prototype.$classData = ScalaJS.data.scala_collection_MapLike$FilteredKeys;
//@ sourceMappingURL=MapLike$FilteredKeys.js.map
