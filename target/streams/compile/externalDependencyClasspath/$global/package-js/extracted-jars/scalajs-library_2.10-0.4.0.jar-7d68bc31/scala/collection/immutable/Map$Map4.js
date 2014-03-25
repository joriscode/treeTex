/** @constructor */
ScalaJS.c.scala_collection_immutable_Map$Map4 = (function() {
  ScalaJS.c.scala_collection_immutable_AbstractMap.call(this);
  this.key1$5 = null;
  this.value1$5 = null;
  this.key2$5 = null;
  this.value2$5 = null;
  this.key3$5 = null;
  this.value3$5 = null;
  this.key4$5 = null;
  this.value4$5 = null
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype = new ScalaJS.inheritable.scala_collection_immutable_AbstractMap();
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.constructor = ScalaJS.c.scala_collection_immutable_Map$Map4;
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.size__I = (function() {
  return 4
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.get__O__Lscala_Option = (function(key) {
  if (ScalaJS.anyEqEq(key, this.key1$5)) {
    return new ScalaJS.c.scala_Some().init___O(this.value1$5)
  } else {
    if (ScalaJS.anyEqEq(key, this.key2$5)) {
      return new ScalaJS.c.scala_Some().init___O(this.value2$5)
    } else {
      if (ScalaJS.anyEqEq(key, this.key3$5)) {
        return new ScalaJS.c.scala_Some().init___O(this.value3$5)
      } else {
        if (ScalaJS.anyEqEq(key, this.key4$5)) {
          return new ScalaJS.c.scala_Some().init___O(this.value4$5)
        } else {
          return ScalaJS.modules.scala_None()
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().apply__Lscala_collection_Seq__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(this.key1$5, this.value1$5), new ScalaJS.c.scala_Tuple2().init___O__O(this.key2$5, this.value2$5), new ScalaJS.c.scala_Tuple2().init___O__O(this.key3$5, this.value3$5), new ScalaJS.c.scala_Tuple2().init___O__O(this.key4$5, this.value4$5)]), 1)))
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  if (ScalaJS.anyEqEq(key, this.key1$5)) {
    return new ScalaJS.c.scala_collection_immutable_Map$Map4().init___O__O__O__O__O__O__O__O(this.key1$5, value, this.key2$5, this.value2$5, this.key3$5, this.value3$5, this.key4$5, this.value4$5)
  } else {
    if (ScalaJS.anyEqEq(key, this.key2$5)) {
      return new ScalaJS.c.scala_collection_immutable_Map$Map4().init___O__O__O__O__O__O__O__O(this.key1$5, this.value1$5, this.key2$5, value, this.key3$5, this.value3$5, this.key4$5, this.value4$5)
    } else {
      if (ScalaJS.anyEqEq(key, this.key3$5)) {
        return new ScalaJS.c.scala_collection_immutable_Map$Map4().init___O__O__O__O__O__O__O__O(this.key1$5, this.value1$5, this.key2$5, this.value2$5, this.key3$5, value, this.key4$5, this.value4$5)
      } else {
        if (ScalaJS.anyEqEq(key, this.key4$5)) {
          return new ScalaJS.c.scala_collection_immutable_Map$Map4().init___O__O__O__O__O__O__O__O(this.key1$5, this.value1$5, this.key2$5, this.value2$5, this.key3$5, this.value3$5, this.key4$5, value)
        } else {
          return new ScalaJS.c.scala_collection_immutable_HashMap().init___().$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_HashMap(new ScalaJS.c.scala_Tuple2().init___O__O(this.key1$5, this.value1$5), new ScalaJS.c.scala_Tuple2().init___O__O(this.key2$5, this.value2$5), ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [new ScalaJS.c.scala_Tuple2().init___O__O(this.key3$5, this.value3$5), new ScalaJS.c.scala_Tuple2().init___O__O(this.key4$5, this.value4$5), new ScalaJS.c.scala_Tuple2().init___O__O(key, value)]), 1)))
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.updated__O__O__Lscala_collection_immutable_Map(kv.$$und1__O(), kv.$$und2__O())
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$$minus__O__Lscala_collection_immutable_Map = (function(key) {
  if (ScalaJS.anyEqEq(key, this.key1$5)) {
    return new ScalaJS.c.scala_collection_immutable_Map$Map3().init___O__O__O__O__O__O(this.key2$5, this.value2$5, this.key3$5, this.value3$5, this.key4$5, this.value4$5)
  } else {
    if (ScalaJS.anyEqEq(key, this.key2$5)) {
      return new ScalaJS.c.scala_collection_immutable_Map$Map3().init___O__O__O__O__O__O(this.key1$5, this.value1$5, this.key3$5, this.value3$5, this.key4$5, this.value4$5)
    } else {
      if (ScalaJS.anyEqEq(key, this.key3$5)) {
        return new ScalaJS.c.scala_collection_immutable_Map$Map3().init___O__O__O__O__O__O(this.key1$5, this.value1$5, this.key2$5, this.value2$5, this.key4$5, this.value4$5)
      } else {
        if (ScalaJS.anyEqEq(key, this.key4$5)) {
          return new ScalaJS.c.scala_collection_immutable_Map$Map3().init___O__O__O__O__O__O(this.key1$5, this.value1$5, this.key2$5, this.value2$5, this.key3$5, this.value3$5)
        } else {
          return this
        }
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.foreach__Lscala_Function1__V = (function(f) {
  f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(this.key1$5, this.value1$5));
  f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(this.key2$5, this.value2$5));
  f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(this.key3$5, this.value3$5));
  f.apply__O__O(new ScalaJS.c.scala_Tuple2().init___O__O(this.key4$5, this.value4$5))
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map(key)
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_Map(elem)
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_Map(key)
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(kv)
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(kv)
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_Map(key, value)
});
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.init___O__O__O__O__O__O__O__O = (function(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.key1$5 = key1;
  this.value1$5 = value1;
  this.key2$5 = key2;
  this.value2$5 = value2;
  this.key3$5 = key3;
  this.value3$5 = value3;
  this.key4$5 = key4;
  this.value4$5 = value4;
  ScalaJS.c.scala_collection_immutable_AbstractMap.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Map$Map4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Map$Map4.prototype = ScalaJS.c.scala_collection_immutable_Map$Map4.prototype;
ScalaJS.is.scala_collection_immutable_Map$Map4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Map$Map4)))
});
ScalaJS.as.scala_collection_immutable_Map$Map4 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Map$Map4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Map$Map4")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Map$Map4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Map$Map4)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Map$Map4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Map$Map4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map4;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Map$Map4 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Map$Map4: 0
}, false, "scala.collection.immutable.Map$Map4", ScalaJS.data.scala_collection_immutable_AbstractMap, {
  scala_collection_immutable_Map$Map4: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_Map$Map4.prototype.$classData = ScalaJS.data.scala_collection_immutable_Map$Map4;
//@ sourceMappingURL=Map$Map4.js.map
