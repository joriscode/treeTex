/** @constructor */
ScalaJS.c.scala_collection_MapLike$MappedValues = (function() {
  ScalaJS.c.scala_collection_AbstractMap.call(this);
  this.scala$collection$MapLike$MappedValues$$f$f = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype = new ScalaJS.inheritable.scala_collection_AbstractMap();
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.constructor = ScalaJS.c.scala_collection_MapLike$MappedValues;
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return ScalaJS.impls.scala_collection_DefaultMap$class__$plus__Lscala_collection_DefaultMap__Lscala_Tuple2__Lscala_collection_Map(this, kv)
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return ScalaJS.impls.scala_collection_DefaultMap$class__$minus__Lscala_collection_DefaultMap__O__Lscala_collection_Map(this, key)
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.foreach__Lscala_Function1__V = (function(g) {
  this.scala$collection$MapLike$MappedValues$$$outer__Lscala_collection_MapLike().withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(check$ifrefutable$1) {
      var x1 = check$ifrefutable$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$1 = true;
          break matchEnd3
        };
        var jsx$1 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$1)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, g$1) {
    return (function(x$1) {
      var x1 = x$1;
      if ((x1 !== null)) {
        var k = x1.$$und1__O();
        var v = x1.$$und2__O();
        return g$1.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(k, arg$outer.scala$collection$MapLike$MappedValues$$f$f.apply__O__O(v)))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(this, g)))
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.scala$collection$MapLike$MappedValues$$$outer__Lscala_collection_MapLike().iterator__Lscala_collection_Iterator().withFilter__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(check$ifrefutable$2) {
      var x1 = check$ifrefutable$2;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$2 = true;
          break matchEnd3
        };
        var jsx$2 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$2)
    })
  })())).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$2) {
      var x1 = x$2;
      if ((x1 !== null)) {
        var k = x1.$$und1__O();
        var v = x1.$$und2__O();
        return new ScalaJS.c.scala_Tuple2().init___O__O(k, arg$outer.scala$collection$MapLike$MappedValues$$f$f.apply__O__O(v))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(this)))
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.size__I = (function() {
  return this.scala$collection$MapLike$MappedValues$$$outer__Lscala_collection_MapLike().size__I()
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.contains__O__Z = (function(key) {
  return this.scala$collection$MapLike$MappedValues$$$outer__Lscala_collection_MapLike().contains__O__Z(key)
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.get__O__Lscala_Option = (function(key) {
  return this.scala$collection$MapLike$MappedValues$$$outer__Lscala_collection_MapLike().get__O__Lscala_Option(key).map__Lscala_Function1__Lscala_Option(this.scala$collection$MapLike$MappedValues$$f$f)
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.scala$collection$MapLike$MappedValues$$$outer__Lscala_collection_MapLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_Map(key)
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_Map(elem)
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_Map(kv)
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.init___Lscala_collection_MapLike__Lscala_Function1 = (function($$outer, f) {
  this.scala$collection$MapLike$MappedValues$$f$f = f;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_DefaultMap$class__$init$__Lscala_collection_DefaultMap__V(this);
  return this
});
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.scala$collection$MapLike$MappedValues$$$outer__ = (function() {
  return this.scala$collection$MapLike$MappedValues$$$outer__Lscala_collection_MapLike()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_MapLike$MappedValues = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_MapLike$MappedValues.prototype = ScalaJS.c.scala_collection_MapLike$MappedValues.prototype;
ScalaJS.is.scala_collection_MapLike$MappedValues = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_MapLike$MappedValues)))
});
ScalaJS.as.scala_collection_MapLike$MappedValues = (function(obj) {
  if ((ScalaJS.is.scala_collection_MapLike$MappedValues(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.MapLike$MappedValues")
  }
});
ScalaJS.isArrayOf.scala_collection_MapLike$MappedValues = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_MapLike$MappedValues)))
});
ScalaJS.asArrayOf.scala_collection_MapLike$MappedValues = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_MapLike$MappedValues(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.MapLike$MappedValues;", depth)
  }
});
ScalaJS.data.scala_collection_MapLike$MappedValues = new ScalaJS.ClassTypeData({
  scala_collection_MapLike$MappedValues: 0
}, false, "scala.collection.MapLike$MappedValues", ScalaJS.data.scala_collection_AbstractMap, {
  scala_collection_MapLike$MappedValues: 1,
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
ScalaJS.c.scala_collection_MapLike$MappedValues.prototype.$classData = ScalaJS.data.scala_collection_MapLike$MappedValues;
//@ sourceMappingURL=MapLike$MappedValues.js.map
